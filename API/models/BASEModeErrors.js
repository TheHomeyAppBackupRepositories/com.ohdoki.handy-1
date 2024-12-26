"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASEModeErrors = void 0;
/**
 * The different possible mode independent specific error codes. <p> <ul> <li>ERROR(2000) - Unspecified error.</li> <li>INVALID_REQUEST(2001) - The request could not be processed by the device due to the request content.</li> <li>METHOD_NOT_FOUND(2002) - The requested operation is not supported by the device or the current device mode.</li> </ul>
 */
var BASEModeErrors;
(function (BASEModeErrors) {
    /**
     * Unspecified error
     */
    BASEModeErrors[BASEModeErrors["ERROR"] = 2000] = "ERROR";
    /**
     * The request could not be processed by the device due to the request content.
     */
    BASEModeErrors[BASEModeErrors["INVALID_REQUEST"] = 2001] = "INVALID_REQUEST";
    /**
     * The requested operation is not supported on the device.
     */
    BASEModeErrors[BASEModeErrors["METHOD_NOT_FOUND"] = 2002] = "METHOD_NOT_FOUND";
})(BASEModeErrors = exports.BASEModeErrors || (exports.BASEModeErrors = {}));
