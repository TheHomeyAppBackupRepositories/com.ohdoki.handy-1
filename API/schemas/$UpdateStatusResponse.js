"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$UpdateStatusResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$UpdateStatusResponse = {
    type: 'all-of',
    contains: [{
            type: 'RPCResult',
        }, {
            properties: {
                status: {
                    type: 'Enum',
                    isRequired: true,
                },
                progress: {
                    type: 'number',
                    isRequired: true,
                    maximum: 100,
                },
            },
        }],
};
