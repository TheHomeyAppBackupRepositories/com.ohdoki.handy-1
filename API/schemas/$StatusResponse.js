"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$StatusResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$StatusResponse = {
    description: `Machine status`,
    properties: {
        mode: {
            type: 'Mode',
            isRequired: true,
        },
        state: {
            type: 'one-of',
            contains: [{
                    type: 'HSSPState',
                }, {
                    type: 'HAMPState',
                }],
        },
    },
};
