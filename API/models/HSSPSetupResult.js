"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSSPSetupResult = void 0;
/**
 * Possible HSSP setup result codes. <ul><li>USING_CACHED(0) - Script already present on the device.</li><li>DOWNLOADED(1) - Script downloaded successfully.</li></ul>
 */
var HSSPSetupResult;
(function (HSSPSetupResult) {
    /**
     * USING_CACHED
     */
    HSSPSetupResult[HSSPSetupResult["USING_CACHED"] = 0] = "USING_CACHED";
    /**
     * DOWNLOADED
     */
    HSSPSetupResult[HSSPSetupResult["DOWNLOADED"] = 1] = "DOWNLOADED";
})(HSSPSetupResult = exports.HSSPSetupResult || (exports.HSSPSetupResult = {}));
