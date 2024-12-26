"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homey_1 = __importDefault(require("homey"));
// import { PairSession } from 'homey/lib/Driver';
const handy_1 = __importDefault(require("../../logic/handy"));
class MyDriver extends homey_1.default.Driver {
    constructor() {
        super(...arguments);
        this.connected = false;
    }
    triggerOffline(device, tokens, state) {
        this.offlineFlow
            .trigger(device, tokens, state)
            .then(this.log)
            .catch(this.error);
    }
    triggerOnline(device, tokens, state) {
        this.onlineFlow
            .trigger(device, tokens, state)
            .then(this.log)
            .catch(this.error);
    }
    async onInit() {
        this.log('MyDriver has been initialized');
        // const hampStart = this.homey.flow.getActionCard("hamp-start");
        this.offlineFlow = this.homey.flow.getDeviceTriggerCard("handy-offline");
        this.onlineFlow = this.homey.flow.getDeviceTriggerCard("handy-online");
        const hampStart = this.homey.flow.getActionCard("hamp-start");
        hampStart.registerRunListener(async (args, state) => {
            var _a;
            //
            this.log("args:", args);
            this.log("state:", state);
            // this.log("handy:", args.device.handy); //The Handy object
            let { start } = args;
            start = start === "start";
            await ((_a = args.device.handy) === null || _a === void 0 ? void 0 : _a.hampStart(start));
        });
        const hampVelocity = this.homey.flow.getActionCard("hamp-velocity");
        hampVelocity.registerRunListener(async (args, state) => {
            var _a;
            this.log(args);
            const { velocity } = args;
            await ((_a = args.device.handy) === null || _a === void 0 ? void 0 : _a.hampVelocity(velocity));
        });
        const strokeZone = this.homey.flow.getActionCard("stroke-zone");
        strokeZone.registerRunListener(async (args, state) => {
            var _a;
            this.log(args);
            const { min, max } = args;
            await ((_a = args.device.handy) === null || _a === void 0 ? void 0 : _a.setStrokeZone(min, max));
        });
        const setPosition = this.homey.flow.getActionCard("set-position");
        setPosition.registerRunListener(async (args, state) => {
            var _a;
            this.log(args);
            const { duration, position } = args;
            await ((_a = args.device.handy) === null || _a === void 0 ? void 0 : _a.goToPosition(duration, position));
        });
        const playScript = this.homey.flow.getActionCard("play-script");
        playScript.registerRunListener(async (args, state) => {
            var _a;
            this.log(args);
            const { url } = args;
            await ((_a = args.device.handy) === null || _a === void 0 ? void 0 : _a.playScript(url));
        });
        //
        const playScriptPreset = this.homey.flow.getActionCard("play-script-preset");
        playScriptPreset.registerRunListener(async (args, state) => {
            var _a;
            this.log(args);
            const { preset } = args;
            await ((_a = args.device.handy) === null || _a === void 0 ? void 0 : _a.playScriptPrest(preset));
        });
        const conditionConnected = this.homey.flow.getConditionCard("handy-connected");
        conditionConnected.registerRunListener(async (args, state) => {
            var _a;
            const connected = await ((_a = args.device.handy) === null || _a === void 0 ? void 0 : _a.getConnected());
            this.log("Connected:", connected);
            return connected;
        });
    }
    onPair(session) {
        session.setHandler("connect", async (data) => {
            var _a;
            this.log('data:', data);
            this.handy = new handy_1.default(data.key, this);
            const connected = await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.getConnected());
            this.log("connected:", connected);
            return connected;
        });
    }
}
module.exports = MyDriver;
