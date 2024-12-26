"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSSPState = void 0;
/**
 * Possible HSSP states: <ul> <li>NEED_SYNC(1) - The device need to synchronize with the server. Only returned from devices with firmware version <= 3.1.x</li> <li>NEED_SETUP(2) - No script have yet been setup on the device.</li> <li>STOPPED(3) - The script execution is stopped.</li> <li>PLAYING(4) - The device is executing the script.</li> </ul>
 */
var HSSPState;
(function (HSSPState) {
    /**
     * NEED_SYNC
     */
    HSSPState[HSSPState["NEED_SYNC"] = 1] = "NEED_SYNC";
    /**
     * NEED_SETUP
     */
    HSSPState[HSSPState["NEED_SETUP"] = 2] = "NEED_SETUP";
    /**
     * STOPPED
     */
    HSSPState[HSSPState["STOPPED"] = 3] = "STOPPED";
    /**
     * PLAYING
     */
    HSSPState[HSSPState["PLAYING"] = 4] = "PLAYING";
})(HSSPState = exports.HSSPState || (exports.HSSPState = {}));
