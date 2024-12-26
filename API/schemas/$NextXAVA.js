"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NextXAVA = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NextXAVA = {
    type: 'all-of',
    contains: [{
            type: 'HDSPRequest',
        }, {
            properties: {
                position: {
                    type: 'PositionAbsolute',
                    isRequired: true,
                },
                velocity: {
                    type: 'VelocityAbsolute',
                    isRequired: true,
                },
            },
        }],
};
