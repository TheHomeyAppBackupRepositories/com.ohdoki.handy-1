"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResult = void 0;
/**
 * Generic result values.<ul><li>SUCCESS(0)</li><li>ERROR(-1)</li></ul>
 */
var GenericResult;
(function (GenericResult) {
    /**
     * SUCCESS
     */
    GenericResult[GenericResult["SUCCESS"] = 0] = "SUCCESS";
    /**
     * ERROR
     */
    GenericResult[GenericResult["ERROR"] = -1] = "ERROR";
})(GenericResult = exports.GenericResult || (exports.GenericResult = {}));
