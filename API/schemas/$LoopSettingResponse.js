"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$LoopSettingResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$LoopSettingResponse = {
    type: 'all-of',
    contains: [{
            type: 'RPCResult',
        }, {
            properties: {
                activated: {
                    type: 'Looping',
                    isRequired: true,
                },
            },
        }],
};
