"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get the current mode of the device.
     * Get the current mode of the device.
     * @param xConnectionKey Device connection key or a channel reference.
     * @returns any ModeResponse
     * @throws ApiError
     */
    getMode(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/mode',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Set the current mode of the device.
     * Set the current mode of the device.
     * @param xConnectionKey Device connection key or a channel reference.
     * @param requestBody
     * @returns any ModeUpdateResponse
     * @throws ApiError
     */
    setMode(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/mode',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Check device connectivity.
     * Check if a specifc device is connected and online. This is the fastest way to check device connectivity.<br><br> If you need a continuous device connectivity check, this is the endpoint you should be using.
     * @param xConnectionKey Device connection key.
     * @returns ConnectedResponse Machine connected status
     * @throws ApiError
     */
    isConnected(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/connected',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Get extended device information.
     * Returns information about the device; hardware version, firmware version, firmware status, firmware branch and device model.<br><br> The most important information returned is the firmware status value (fwStatus).<br> Depending on the value the device may or may not need an update for the device to work with your service.<br><br> The following values are possible: <ul> <li>UP_TO_DATE(0) - The device is running the latest available firmware. No action required for using your service.</li> <li>UPDATE_REQUIRED(1) - The device is running an out-of-date firmware version. An update is required before the device will work with your service.</li> <li>UPDATE_AVAILABLE(2) - The device is running a firmware with available updates. The update is not stricly neccessary for the device to work with your service, but the update might improve the user experience.</li> </ul> Whenever the firmware status is not UP_TO_DATE(0), it's recommended that you forward the user to <a href="https://www.handyfeeeling.com">https://www.handyfeeeling.com</a> so the user can easily update their device.
     * @param xConnectionKey Device connection key.
     * @returns any Device information
     * @throws ApiError
     */
    getInfo(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/info',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Extended device settings.
     * Get various device settings.
     * @param xConnectionKey Device connection key.
     * @returns any Device settings.
     * @throws ApiError
     */
    getSettings(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/settings',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Get the device status.
     * A convenient endpoint for fetching the current mode of the device and the state within the current mode.<br> For modes with a single state, the returned state value will always be 0.<br> For modes with multiple states, see the schema definition for possible values.<br>
     * @param xConnectionKey Device connection key.
     * @returns any Device status
     * @throws ApiError
     */
    getStatus(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/status',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
}
exports.BaseService = BaseService;
