"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$HAMPStopResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$HAMPStopResponse = {
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
