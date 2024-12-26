"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeUpdateResponse = void 0;
var ModeUpdateResponse;
(function (ModeUpdateResponse) {
    /**
     * Possible result codes from a set mode operation. <ul><li>ERROR(-1) - Failed setting mode.</li><li>SUCCESS_NEW_MODE(0) - Success, another mode was previously set.</li><li>SUCCESS_SAME_MODE(1) - Success, the same mode was previously set.</li>
     */
    let result;
    (function (result) {
        result[result["ERROR"] = -1] = "ERROR";
        result[result["SUCCESS_NEW_MODE"] = 0] = "SUCCESS_NEW_MODE";
        result[result["SUCCESS_SAME_MODE"] = 1] = "SUCCESS_SAME_MODE";
    })(result = ModeUpdateResponse.result || (ModeUpdateResponse.result = {}));
})(ModeUpdateResponse = exports.ModeUpdateResponse || (exports.ModeUpdateResponse = {}));
