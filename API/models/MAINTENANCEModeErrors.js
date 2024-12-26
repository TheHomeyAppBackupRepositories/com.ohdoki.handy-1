"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAINTENANCEModeErrors = void 0;
/**
 * The different possible MAINTENANCE mode specific error codes. <p> <ul> <li>ERROR(6000) - Unspecified MAINTENANCE error</li> <li>OPERATION_FAILED(6001) - The device failed to complete the MAINTENANCE operation successfully.</li> </ul>
 */
var MAINTENANCEModeErrors;
(function (MAINTENANCEModeErrors) {
    /**
     * Unspecified MAINTENANCE error
     */
    MAINTENANCEModeErrors[MAINTENANCEModeErrors["ERROR"] = 6000] = "ERROR";
    /**
     * Failed to restart the device.
     */
    MAINTENANCEModeErrors[MAINTENANCEModeErrors["RESTART_FAILED"] = 6001] = "RESTART_FAILED";
})(MAINTENANCEModeErrors = exports.MAINTENANCEModeErrors || (exports.MAINTENANCEModeErrors = {}));
