"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateResult = void 0;
/**
 * Possible result codes returned from a HAMP start/stop operation.<ul><li>ERROR(-1) - Failed stop/starting motion.</li><li>SUCCESS_NEW_STATE(0) - Started/stopped motion.</li><li>SUCCESS_SAME_STATE(1) - Already started/stopped.</li></ul>
 */
var StateResult;
(function (StateResult) {
    /**
     * ERROR
     */
    StateResult[StateResult["ERROR"] = -1] = "ERROR";
    /**
     * SUCCESS_NEW_STATE
     */
    StateResult[StateResult["SUCCESS_NEW_STATE"] = 0] = "SUCCESS_NEW_STATE";
    /**
     * SUCCESS_SAME_STATE
     */
    StateResult[StateResult["SUCCESS_SAME_STATE"] = 1] = "SUCCESS_SAME_STATE";
})(StateResult = exports.StateResult || (exports.StateResult = {}));
