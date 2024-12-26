"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$SlideSettings = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$SlideSettings = {
    type: 'any-of',
    contains: [{
            properties: {
                min: {
                    type: 'PercentValue',
                    isRequired: true,
                },
                max: {
                    type: 'PercentValue',
                    isRequired: true,
                },
            },
        }, {
            properties: {
                min: {
                    type: 'PercentValue',
                    isRequired: true,
                },
                fixed: {
                    type: 'FixedPos',
                },
            },
        }, {
            properties: {
                max: {
                    type: 'PercentValue',
                    isRequired: true,
                },
                fixed: {
                    type: 'FixedPos',
                },
            },
        }],
};
