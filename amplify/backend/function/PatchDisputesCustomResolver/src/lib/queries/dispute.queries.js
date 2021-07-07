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
exports.patchDisputesInDB = exports.getDisputesFromDB = void 0;
const AWS = __importStar(require("aws-sdk"));
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const table = `AppData-${process.env.API_BRAVEAPP_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;
const getDisputesFromDB = (id) => {
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
        var _a, _b;
        const item = res.Item;
        return item ? (_b = (_a = item.agencies) === null || _a === void 0 ? void 0 : _a.transunion) === null || _b === void 0 ? void 0 : _b.disputes : null;
    })
        .catch((err) => err);
};
exports.getDisputesFromDB = getDisputesFromDB;
const patchDisputesInDB = async (id, msg) => {
    let now = Date.now();
    let timeStamp = new Date(now);
    const getParams = {
        TableName: table,
        Key: {
            id: id,
        },
    };
    const disputes = JSON.parse(msg);
    let patched = {};
    try {
        const prior = await exports.getDisputesFromDB(id);
        patched = Object.assign(Object.assign({}, prior), disputes);
    }
    catch (err) {
        throw new Error('Error fetching prior state of disputes');
    }
    const updateParams = {
        TableName: table,
        Key: {
            id: id,
        },
        UpdateExpression: 'set #ag.#tu.#di = :di, #ua = :ua',
        ExpressionAttributeNames: {
            '#ag': 'agencies',
            '#tu': 'transunion',
            '#di': 'disputes',
            '#ua': 'updatedAt',
        },
        ExpressionAttributeValues: {
            ':di': patched,
            ':ua': timeStamp.toISOString(),
        },
        ReturnValues: 'UPDATED_NEW',
    };
    return db
        .update(updateParams)
        .promise()
        .then((res) => res)
        .catch((err) => err);
};
exports.patchDisputesInDB = patchDisputesInDB;
