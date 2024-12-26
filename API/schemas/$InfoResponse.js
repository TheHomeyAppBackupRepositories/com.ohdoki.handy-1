"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$InfoResponse = void 0;
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
exports.$InfoResponse = {
    properties: {
        fwVersion: {
            type: 'FirmwareVersion',
            isRequired: true,
        },
        fwStatus: {
            type: 'FirmwareStatus',
            isRequired: true,
        },
        hwVersion: {
            type: 'HardwareVersion',
            isRequired: true,
        },
        model: {
            type: 'Model',
            isRequired: true,
        },
        branch: {
            type: 'Branch',
            isRequired: true,
        },
        sessionId: {
            type: 'SessionId',
            isRequired: true,
        },
    },
};
