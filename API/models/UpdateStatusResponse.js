"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusResponse = void 0;
var UpdateStatusResponse;
(function (UpdateStatusResponse) {
    /**
     * Possible update status values.<ul><li>PENDING(0)<li>IN_PROGRESS(1)</li><li>SUCCESS(2)</li><li>FAILED(3)</li></ul>
     */
    let status;
    (function (status) {
        status[status["PENDING"] = 0] = "PENDING";
        status[status["IN_PROGRESS"] = 1] = "IN_PROGRESS";
        status[status["SUCCESS"] = 2] = "SUCCESS";
        status[status["FAILED"] = 3] = "FAILED";
    })(status = UpdateStatusResponse.status || (UpdateStatusResponse.status = {}));
})(UpdateStatusResponse = exports.UpdateStatusResponse || (exports.UpdateStatusResponse = {}));
