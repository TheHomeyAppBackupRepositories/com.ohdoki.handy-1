"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HdspService = void 0;
class HdspService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Sets the next absolute position (xa) of the device, and the absolute velocity (va) the device should use to reach the position.
     * Sets the next absolute position (xa) of the device, and the absolute velocity (va) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody
     * @returns any Position
     * @throws ApiError
     */
    nextPostionAbsVelocityAbs(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xava',
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
     * Sets the next percent position (xp) of the device, and the absolute velocity (va) the device should use to reach the position.
     * Sets the next percent position (xp) of the device, and the absolute velocity (va) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody
     * @returns any Position
     * @throws ApiError
     */
    nextPositionPercentVelocityAbsolute(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xpva',
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
     * Sets the next percent position (xp) of the device, and the percent velocity (vp) the device should use to reach the position.
     * Sets the next percent position (xp) of the device, and the percent velocity (vp) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody
     * @returns any Position
     * @throws ApiError
     */
    nextPositionPercentVelocityPercent(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xpvp',
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
     * Sets the next absolute position (xa) of the device, and the time (t) the device should use to reach the position.
     * Sets the next absolute position (xa) of the device, and the time (t) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody
     * @returns any HDSPResponse
     * @throws ApiError
     */
    nextPositionAbsInTime(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xat',
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
     * Sets the next percent position (xp) of the device, and the time (t) the device should use to reach the position.
     * Sets the next percent position (xp) of the device, and the time (t) the device should use to reach the position.
     * @param xConnectionKey Device connection key.
     * @param requestBody
     * @returns any HDSPResponse
     * @throws ApiError
     */
    nextPositionPercentInTime(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hdsp/xpt',
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
}
exports.HdspService = HdspService;
