"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceService = void 0;
class MaintenanceService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Restart the device.
     * Restart the device. If the optional reconnect flag is set to <code>true</code>, the device will reconnect to the server after restart. The reconnect value defaults to <code>true</code> if not specified.
     * @param xConnectionKey Device connection key.
     * @param requestBody
     * @returns any RestartResponse
     * @throws ApiError
     */
    restart(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/maintenance/restart',
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
     * Perform firmware update.
     * Perform firmware update.
     * @param xConnectionKey Device connection key.
     * @param requestBody
     * @returns any UpdatePerformResponse
     * @throws ApiError
     */
    updatePerformFw(xConnectionKey, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/maintenance/update/perform',
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
     * Get the device update status.
     * Get the device update status.
     * @param xConnectionKey Device connection key.
     * @returns any UpdateStatusResponse
     * @throws ApiError
     */
    getUpdateStatus(xConnectionKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/maintenance/update/status',
            headers: {
                'X-Connection-Key': xConnectionKey,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
}
exports.MaintenanceService = MaintenanceService;
