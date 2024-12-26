"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ConnectionKey = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$ConnectionKey = {
    type: 'string',
    maxLength: 64,
    minLength: 5,
    pattern: '^[a-zA-Z0-9]{5,64}$',
};
