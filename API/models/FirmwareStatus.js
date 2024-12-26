"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirmwareStatus = void 0;
/**
 * Possible device firmware status. <p> <ul> <li>0 - UP_TO_DATE - The firmware is up-tp-date (latest version).</li> <li>1 - UPDATE_REQUIRED - A critical update is available.</li> <li>2 - UPDATE_AVAILABLE - An non critical update to the firmware is available.</li> </ul>
 */
var FirmwareStatus;
(function (FirmwareStatus) {
    /**
     * The firmware is up-tp-date (latest version).
     */
    FirmwareStatus[FirmwareStatus["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    /**
     * A critical update is available.
     */
    FirmwareStatus[FirmwareStatus["UPDATE_REQUIRED"] = 1] = "UPDATE_REQUIRED";
    /**
     * An non critical update to the firmware is available.
     */
    FirmwareStatus[FirmwareStatus["UPDATE_AVAILABLE"] = 2] = "UPDATE_AVAILABLE";
})(FirmwareStatus = exports.FirmwareStatus || (exports.FirmwareStatus = {}));
