"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$PositionAbsoluteResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$PositionAbsoluteResponse = {
    type: 'all-of',
    contains: [{
            type: 'RPCResult',
        }, {
            properties: {
                position: {
                    type: 'PositionAbsolute',
                    isRequired: true,
                },
            },
        }],
};
