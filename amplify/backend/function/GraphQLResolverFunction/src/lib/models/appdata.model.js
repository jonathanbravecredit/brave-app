"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataModel = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const dynamo_easy_1 = require("@shiftcoders/dynamo-easy");
const tableName = `AppData-${process.env.API_BRAVEAPP_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`;
let AppDataModel = class AppDataModel {
};
tslib_1.__decorate([
    dynamo_easy_1.PartitionKey()
], AppDataModel.prototype, "id", void 0);
AppDataModel = tslib_1.__decorate([
    dynamo_easy_1.Model({ tableName: tableName })
], AppDataModel);
exports.AppDataModel = AppDataModel;
