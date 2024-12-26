"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HampService = void 0;
class HampService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Start alternating motion.
     * Start alternating motion. No effect if the device is already moving.
     * @param xConnectionKey Device connection key or a channel reference.
     * @returns any HAMPStartResponse
     * @throws ApiError
     */
    start(xConnectionKey) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hamp/start',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Stop alternating motion.
     * Stop alternating motion. No effect if the device is already stopped.
     * @param xConnectionKey Device connection key or a channel reference.
     * @returns any HAMPStopResponse
     * @throws ApiError
     */
    hampStop(xConnectionKey) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hamp/stop',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Get the HAMP velocity setting of the device in percent.
     * Get the HAMP velocity setting of the device in percent.
     * @param xConnectionKey Device connection key or a channel reference.
     * @returns any HAMPVelocityPercentResponse
     * @throws ApiError
     */
    getHampVelocityPercent(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hamp/velocity',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
    /**
     * Set the HAMP velocity setting of the device in percent.
     * Set the HAMP velocity setting of the alternating motion in percent.<p>NOTE: The velocity can only be set when HAMP mode is enabled (mode=2) and when the slide is moving (HAMP state=2). Attempting to set the velocity outside of this mode/state will result in an error response.
     * @param xConnectionKey Device connection key or a channel reference.
     * @param requestBody
     * @returns any RPCResult
     * @throws ApiError
     */
    setHampVelocityPercent(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hamp/velocity',
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
     * Get the HAMP state of the device.
     * Get the HAMP state of the device. See HAMPStateResponse schema for possible values.
     * @param xConnectionKey Device connection key or a channel reference.
     * @returns any HAMPState
     * @throws ApiError
     */
    getHampState(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hamp/state',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
}
exports.HampService = HampService;
