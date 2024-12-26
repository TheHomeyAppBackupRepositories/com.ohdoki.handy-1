"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSSPModeErrors = void 0;
/**
 * The different possible HSSP mode specific error codes. <p> <ul> <li>ERROR(4000) - Unspecified HSSP error.</li> <li>DOWNLOAD_FAILED(4001) - The device could not download the specified script.</li> <li>HASH_ERROR(4002) - Script hash validation error</li> <li>SYNC_REQUIRED(4003) - The device need to resync with the server before HSSP setup can be peformed. Only returned from devices running firmware version <= 3.1.x</li> <li>TOKEN_ERROR(4004) - Unspecified token error. Check error response data property for chained error info.</li> <li>MAX_SCRIPT_SIZE_ERROR(4005) - The script is too large for the device. The maximum supported CSV file size is 524288 bytes.</li> <li>DEVICE_STORAGE_FULL_ERROR(4006) - The setup failed because the device storage is full.</li> <li>DEVICE_STORAGE_FREE_ERROR(4007) - The setup failed. Not enough space left to store the script on the device.</li> <li>DEVICE_STORAGE_CLEAN_ERROR(4008) - The setup failed. An attempt to free up device space failed.</li> </ul>
 */
var HSSPModeErrors;
(function (HSSPModeErrors) {
    /**
     * Unspecified HSSP error.
     */
    HSSPModeErrors[HSSPModeErrors["ERROR"] = 4000] = "ERROR";
    /**
     * The device could not download the specified script.
     */
    HSSPModeErrors[HSSPModeErrors["DOWNLOAD_FAILED"] = 4001] = "DOWNLOAD_FAILED";
    /**
     * The validation of the script hash failed.
     */
    HSSPModeErrors[HSSPModeErrors["HASH_ERROR"] = 4002] = "HASH_ERROR";
    /**
     * The device need to resync with the server before the setup can be peformed.
     */
    HSSPModeErrors[HSSPModeErrors["SYNC_REQUIRED"] = 4003] = "SYNC_REQUIRED";
    /**
     * Generic token error.
     */
    HSSPModeErrors[HSSPModeErrors["TOKEN_ERROR"] = 4004] = "TOKEN_ERROR";
    /**
     * The script is too large for the device.
     */
    HSSPModeErrors[HSSPModeErrors["MAX_SCRIPT_SIZE_ERROR"] = 4005] = "MAX_SCRIPT_SIZE_ERROR";
    /**
     * The device storage is full.
     */
    HSSPModeErrors[HSSPModeErrors["DEVICE_STORAGE_FULL_ERROR"] = 4006] = "DEVICE_STORAGE_FULL_ERROR";
    /**
     * The device storage does not have enough free space to store the script.
     */
    HSSPModeErrors[HSSPModeErrors["DEVICE_STORAGE_FREE_ERROR"] = 4007] = "DEVICE_STORAGE_FREE_ERROR";
    /**
     * An attempt to free up device storage space failed.
     */
    HSSPModeErrors[HSSPModeErrors["DEVICE_STORAGE_CLEAN_ERROR"] = 4008] = "DEVICE_STORAGE_CLEAN_ERROR";
})(HSSPModeErrors = exports.HSSPModeErrors || (exports.HSSPModeErrors = {}));
