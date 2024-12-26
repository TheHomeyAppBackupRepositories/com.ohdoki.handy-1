"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mode = void 0;
/**
 * Available device modes.<ul><li>HAMP(0)<li>HSSP(1)</li><li>HDSP(2)</li><li>MAINTENANCE(3)</li><li>HBSP(4)</li></ul>
 */
var Mode;
(function (Mode) {
    /**
     * HAMP
     */
    Mode[Mode["HAMP"] = 0] = "HAMP";
    /**
     * HSSP
     */
    Mode[Mode["HSSP"] = 1] = "HSSP";
    /**
     * HDSP
     */
    Mode[Mode["HDSP"] = 2] = "HDSP";
    /**
     * MAINTENANCE
     */
    Mode[Mode["MAINTENANCE"] = 3] = "MAINTENANCE";
    /**
     * HBSP
     */
    Mode[Mode["HBSP"] = 4] = "HBSP";
})(Mode = exports.Mode || (exports.Mode = {}));
