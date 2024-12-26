"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$NextXPT = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$NextXPT = {
    type: 'all-of',
    contains: [{
            type: 'HDSPTimeRequest',
        }, {
            properties: {
                position: {
                    type: 'PercentValue',
                    isRequired: true,
                },
            },
        }],
};
