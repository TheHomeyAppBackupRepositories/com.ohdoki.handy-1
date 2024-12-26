"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$HSSPPlayResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$HSSPPlayResponse = {
    type: 'all-of',
    description: `The response returned from a hssp/play operation.`,
    contains: [{
            properties: {
                result: {
                    type: 'HSSPPlayResult',
                    isRequired: true,
                },
            },
        }],
};
