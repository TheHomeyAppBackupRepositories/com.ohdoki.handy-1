"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$HSSPResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$HSSPResponse = {
    properties: {
        state: {
            type: 'HSSPState',
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
        offset: {
            type: 'Offset',
            isRequired: true,
        },
    },
};
