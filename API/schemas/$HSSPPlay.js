"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$HSSPPlay = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$HSSPPlay = {
    properties: {
        estimatedServerTime: {
            type: 'number',
            description: `The client side estimated server time in milliseconds (Unix Epoch).`,
            isRequired: true,
        },
        startTime: {
            type: 'number',
            description: `The time index to start playing from in milliseconds.`,
            isRequired: true,
        },
    },
};
