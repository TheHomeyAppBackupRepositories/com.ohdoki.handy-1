"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HAMPState = void 0;
/**
 * Possible HAMP states: <ul> <li>STOPPED(1) - The device slide is not moving.</li> <li>MOVING(2) - The device slide is moving</li> </ul>
 */
var HAMPState;
(function (HAMPState) {
    /**
     * STOPPED
     */
    HAMPState[HAMPState["STOPPED"] = 1] = "STOPPED";
    /**
     * MOVING
     */
    HAMPState[HAMPState["MOVING"] = 2] = "MOVING";
})(HAMPState = exports.HAMPState || (exports.HAMPState = {}));
