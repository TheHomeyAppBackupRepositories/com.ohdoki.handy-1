"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSSPPlayResult = void 0;
/**
 * Possible HSSP play result codes. <ul><li>SUCCESS(0) - Script is playing.</li><li>ERROR(-1) - Script is not playing.</li></ul>
 */
var HSSPPlayResult;
(function (HSSPPlayResult) {
    /**
     * Success. Script is playing.
     */
    HSSPPlayResult[HSSPPlayResult["SUCCESS"] = 0] = "SUCCESS";
    /**
     * Error. Script is not playing.
     */
    HSSPPlayResult[HSSPPlayResult["ERROR"] = -1] = "ERROR";
})(HSSPPlayResult = exports.HSSPPlayResult || (exports.HSSPPlayResult = {}));
