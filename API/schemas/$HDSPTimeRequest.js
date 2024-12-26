"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$HDSPTimeRequest = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$HDSPTimeRequest = {
    type: 'all-of',
    contains: [{
            type: 'HDSPRequest',
        }, {
            properties: {
                duration: {
                    type: 'Duration',
                    isRequired: true,
                },
            },
        }],
};
