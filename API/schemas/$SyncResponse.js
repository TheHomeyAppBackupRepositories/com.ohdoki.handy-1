"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SyncResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SyncResponse = {
    type: 'all-of',
    contains: [{
            type: 'RPCResult',
        }, {
            properties: {
                dtserver: {
                    type: 'Timestamp',
                    isRequired: true,
                },
            },
        }],
};
