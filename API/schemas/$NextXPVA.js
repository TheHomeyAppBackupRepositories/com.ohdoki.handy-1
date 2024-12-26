"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NextXPVA = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NextXPVA = {
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
                    type: 'VelocityAbsolute',
                    isRequired: true,
                },
            },
        }],
};
