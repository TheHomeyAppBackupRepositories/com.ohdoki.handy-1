"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ErrorResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ErrorResponse = {
    properties: {
        error: {
            properties: {
                connected: {
                    type: 'boolean',
                    isRequired: true,
                },
                name: {
                    type: 'string',
                    isRequired: true,
                },
                message: {
                    type: 'string',
                    isRequired: true,
                },
                code: {
                    type: 'one-of',
                    contains: [{
                            type: 'Enum',
                        }, {
                            type: 'BASEModeErrors',
                        }, {
                            type: 'HAMPModeErrors',
                        }, {
                            type: 'HSSPModeErrors',
                        }, {
                            type: 'HDSPModeErrors',
                        }, {
                            type: 'MAINTENANCEModeErrors',
                        }],
                    isRequired: true,
                },
                data: {
                    properties: {},
                },
            },
        },
    },
};
