"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$HAMPStartResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$HAMPStartResponse = {
    type: 'all-of',
    contains: [{
            properties: {
                result: {
                    type: 'StateResult',
                    isRequired: true,
                },
            },
        }],
};
