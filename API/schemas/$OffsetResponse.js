"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$OffsetResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$OffsetResponse = {
    type: 'all-of',
    contains: [{
            type: 'RPCResult',
        }, {
            properties: {
                offset: {
                    type: 'Offset',
                    isRequired: true,
                },
            },
        }],
};
