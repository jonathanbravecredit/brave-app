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
exports.getDispute = void 0;
const dynamo_easy_1 = require("@shiftcoders/dynamo-easy");
const AWS = __importStar(require("aws-sdk"));
const appdata_model_1 = require("models/appdata.model");
const utils_1 = require("utils/utils");
const db = new AWS.DynamoDB();
const AppDataStore = new dynamo_easy_1.DynamoStore(appdata_model_1.AppDataModel);
const getDispute = (id) => {
    return AppDataStore.get(id)
        .exec()
        .then((res) => {
        var _a;
        const transunion = (_a = res === null || res === void 0 ? void 0 : res.agencies) === null || _a === void 0 ? void 0 : _a.transunion;
        return transunion ? utils_1.returnNestedObject(transunion, 'disputes') : null;
    })
        .catch((err) => err);
};
exports.getDispute = getDispute;
