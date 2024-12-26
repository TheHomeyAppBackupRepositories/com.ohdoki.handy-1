"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$HAMPResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$HAMPResponse = {
    properties: {
        state: {
            type: 'HAMPState',
            isRequired: true,
        },
        slideMax: {
            type: 'PercentValue',
            isRequired: true,
        },
        slideMin: {
            type: 'PercentValue',
            isRequired: true,
        },
        velocity: {
            type: 'PercentValue',
        },
    },
};
