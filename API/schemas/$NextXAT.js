"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NextXAT = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NextXAT = {
    type: 'all-of',
    contains: [{
            type: 'HDSPTimeRequest',
        }, {
            properties: {
                position: {
                    type: 'PositionAbsolute',
                    isRequired: true,
                },
            },
        }],
};
