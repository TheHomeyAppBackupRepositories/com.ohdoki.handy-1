"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtaService = void 0;
class OtaService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get the latest available firmware available for the provided model and branch.
     * Get the latest available firmware available for the provided model and branch.
     * @param model The model to get latest firmware for.
     * @param branch The branch to get latest firmware for.
     * @returns OtaLatestResponse OTA latest response
     * @throws ApiError
     */
    latest(model, branch) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ota/latest',
            query: {
                'model': model,
                'branch': branch,
            },
            errors: {
                400: `Bad request.`,
            },
        });
    }
}
exports.OtaService = OtaService;
