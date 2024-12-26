"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HstpService = void 0;
class HstpService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get the current time of the device.
     * Get the current time of the device. When the device and the server time is synchronized, this will be the server time estimated by the device.
     * @param xConnectionKey Device connection key.
     * @returns any DeviceTimeResponse
     * @throws ApiError
     */
    getDeviceTime(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hstp/time',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Get the HSTP offset of the device.
     * The purpose of the offset value is to provide a way to manually adjust the device/server clock synchronization.<br> One usecase is when playing scripts (see HSSP). Eg. if the script and video is not in perfect sync, a user could adjust the offset value to compensate.<br> <br> Example:<br> If we assume that the current offset value of the device is 0, and the script is 100ms ahead of the video, setting the offset to -100ms could fix the synchronization issue.<br> If the script is 100ms behind the video, setting the offset to 100ms could do the same.<br> In most cases, the device/server clock synchronization is good enough. In some special cases a manual adjustment might be required to get perfect sync.
     * @param xConnectionKey Device connection key.
     * @returns any OffsetResponse
     * @throws ApiError
     */
    getOffset(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hstp/offset',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Set the HSTP offset of the device.
     * The purpose of the offset value is to provide a way to manually adjust the device/server clock synchronization.<br> One usecase is when playing scripts (see HSSP). Eg. if the script and video is not in perfect sync, a user could adjust the offset value to compensate.<br> <br> Example:<br> If we assume that the current offset value of the device is 0, and the script is 100ms ahead of the video, setting the offset to -100ms could fix the synchronization issue.<br> If the script is 100ms behind the video, setting the offset to 100ms could do the same.<br> In most cases, the device/server clock synchronization is good enough, but in some special cases a manual adjustment might be required to achieve perfect synchronization.
     * @param xConnectionKey Device connection key.
     * @param requestBody
     * @returns any RPCResult
     * @throws ApiError
     */
    setOffset(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hstp/offset',
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
     * Get the round-trip-delay-time (rtd) between the device and the server.
     * Get the round-trip-delay-time (rtd) between the device and the server. The rtd is calculated when the synchronization of the server and device time is triggered. See hstp/sync for more information.
     * @param xConnectionKey Device connection key.
     * @returns any RTDResponse
     * @throws ApiError
     */
    getRoundTripDelay(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hstp/rtd',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Syncronize the connected device with the server clock.
     * Syncronizes the device with the server clock and calculates the round-trip-delay between the device and the server.
     * @param xConnectionKey Device connection key.
     * @param syncCount The number of round-trip samples to use in synchronization.
     * @param outliers The number of sample outliers to discard in synchronization.
     * @returns any HSTPSyncResponse
     * @throws ApiError
     */
    sync(xConnectionKey, syncCount, outliers) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hstp/sync',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            query: {
                'syncCount': syncCount,
                'outliers': outliers,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
}
exports.HstpService = HstpService;
