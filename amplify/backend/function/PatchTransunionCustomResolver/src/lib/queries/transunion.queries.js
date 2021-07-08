"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchTransunionInDB = exports.getTransunionFromDB = void 0;
const AWS = __importStar(require("aws-sdk"));
const helpers_1 = require("lib/utils/helpers");
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const table = `AppData-${process.env.API_BRAVEAPP_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;
const getTransunionFromDB = (id) => {
    //look up the id and return only those disputes
    const params = {
        TableName: table,
        Key: {
            id: id,
        },
    };
    return db
        .get(params)
        .promise()
        .then((res) => {
        var _a;
        const item = res.Item;
        return item ? (_a = item.agencies) === null || _a === void 0 ? void 0 : _a.transunion : null;
    })
        .catch((err) => err);
};
exports.getTransunionFromDB = getTransunionFromDB;
const patchTransunionInDB = async (id, msg) => {
    let now = Date.now();
    let timeStamp = new Date(now);
    const transunion = JSON.parse(msg);
    let patched = {};
    try {
        const prior = await exports.getTransunionFromDB(id);
        patched = Object.assign(Object.assign({}, prior), transunion);
    }
    catch (err) {
        throw new Error('Error fetching prior state of transunion');
    }
    const updateParams = {
        TableName: table,
        Key: {
            id: id,
        },
        UpdateExpression: 'set #ag.#tu = :tu, #ua = :ua',
        ExpressionAttributeNames: {
            '#ag': 'agencies',
            '#tu': 'transunion',
            '#ua': 'updatedAt',
        },
        ExpressionAttributeValues: {
            ':tu': patched,
            ':ua': timeStamp.toISOString(),
        },
        ReturnValues: 'UPDATED_NEW',
    };
    return db
        .update(updateParams)
        .promise()
        .then((res) => {
        const attrs = res.Attributes;
        const transunion = helpers_1.returnNestedObject(attrs, 'transunion');
        return transunion;
    })
        .catch((err) => err);
};
exports.patchTransunionInDB = patchTransunionInDB;
