"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideResult = void 0;
/**
 * Possible slide operation result codes. <ul> <li>ACCEPTED(0) - Value updated.</li> <li>ACCEPTED_ROUNDED_DOWN(1) - Value updated but rounded down.</li> <li>ACCEPTED_ROUNDED_UP(2) - Value updated but rounded up.</li> </ul>
 */
var SlideResult;
(function (SlideResult) {
    /**
     * ACCEPTED
     */
    SlideResult[SlideResult["ACCEPTED"] = 0] = "ACCEPTED";
    /**
     * ACCEPTED_ROUNDED_DOWN
     */
    SlideResult[SlideResult["ACCEPTED_ROUNDED_DOWN"] = 1] = "ACCEPTED_ROUNDED_DOWN";
    /**
     * ACCEPTED_ROUNDED_UP
     */
    SlideResult[SlideResult["ACCEPTED_ROUNDED_UP"] = 2] = "ACCEPTED_ROUNDED_UP";
})(SlideResult = exports.SlideResult || (exports.SlideResult = {}));
