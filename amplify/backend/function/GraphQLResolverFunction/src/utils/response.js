"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failure = exports.success = exports.error = exports.response = void 0;
const response = (statusCode, body) => ({
    statusCode,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body, null, 2),
});
exports.response = response;
const error = (error) => ({
    statusCode: error.statusCode,
    headers: {
        "Content-Type": "text/plain",
        "x-amzn-ErrorType": error.code
    },
    "isBase64Encoded": false,
    body: error.code + ": " + error.message
});
exports.error = error;
const success = (body) => exports.response(200, body);
exports.success = success;
const failure = (error) => error(error);
exports.failure = failure;
