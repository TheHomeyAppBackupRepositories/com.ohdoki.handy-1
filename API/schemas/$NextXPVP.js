"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NextXPVP = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NextXPVP = {
    type: 'all-of',
    contains: [{
            type: 'HDSPRequest',
        }, {
            properties: {
                position: {
                    type: 'PercentValue',
                    isRequired: true,
                },
                velocity: {
                    type: 'PercentValue',
                    isRequired: true,
                },
            },
        }],
};
