"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDispute = void 0;
const tslib_1 = require("tslib");
const dynamo_easy_1 = require("@shiftcoders/dynamo-easy");
const AWS = tslib_1.__importStar(require("aws-sdk"));
const appdata_model_1 = require("../models/appdata.model");
const utils_1 = require("../utils/utils");
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
