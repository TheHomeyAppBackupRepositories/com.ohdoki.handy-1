"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HDSPResult = void 0;
/**
 * Possible HDSP result codes. <ul><li>ERROR(-3) - Device failed processing the command.</li><li>SUCCESS_POSITION_REACHED(0)</li><li>SUCCESS_POSITION_NOT_REACHED(1)</li><li>SUCCES_ALREADY_AT_POSITION(2)</li><li>SUCCESS_INTERRTUPTED(3)</li></ul>
 */
var HDSPResult;
(function (HDSPResult) {
    /**
     * ERROR
     */
    HDSPResult[HDSPResult["ERROR"] = -3] = "ERROR";
    /**
     * SUCCESS_POSITION_REACHED
     */
    HDSPResult[HDSPResult["SUCCESS_POSITION_REACHED"] = 0] = "SUCCESS_POSITION_REACHED";
    /**
     * SUCCESS_POSITION_NOT_REACHED
     */
    HDSPResult[HDSPResult["SUCCESS_POSITION_NOT_REACHED"] = 1] = "SUCCESS_POSITION_NOT_REACHED";
    /**
     * SUCCES_ALREADY_AT_POSITION
     */
    HDSPResult[HDSPResult["SUCCES_ALREADY_AT_POSITION"] = 2] = "SUCCES_ALREADY_AT_POSITION";
    /**
     * SUCCESS_INTERRTUPTED
     */
    HDSPResult[HDSPResult["SUCCESS_INTERRTUPTED"] = 3] = "SUCCESS_INTERRTUPTED";
})(HDSPResult = exports.HDSPResult || (exports.HDSPResult = {}));
