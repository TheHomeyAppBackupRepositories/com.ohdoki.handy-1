"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$HAMPVelocityPercentResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$HAMPVelocityPercentResponse = {
    type: 'all-of',
    contains: [{
            type: 'RPCResult',
        }, {
            properties: {
                velocity: {
                    type: 'PercentValue',
                    isRequired: true,
                },
            },
        }],
};
