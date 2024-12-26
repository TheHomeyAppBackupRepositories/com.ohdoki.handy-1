"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Handy_device, _Handy_stateChangeCb;
Object.defineProperty(exports, "__esModule", { value: true });
const API_1 = require("../API");
const STATE_STORAGE_KEY = 'state';
class Handy {
    constructor(connetionKey, app, stateChangeCb = undefined) {
        _Handy_device.set(this, void 0);
        _Handy_stateChangeCb.set(this, void 0);
        app.log("Createing a new Handy instance");
        this.connetionKey = connetionKey;
        __classPrivateFieldSet(this, _Handy_device, app, "f");
        const config = {
            // HEADERS: {
            //   // Authorization: "Bearer " + connectionKey
            // },
            BASE: "https://www.handyfeeling.com/api/handy/v2"
        };
        this.api = new API_1.handyApi(config);
        this.setStateToUnknow();
        if (stateChangeCb)
            __classPrivateFieldSet(this, _Handy_stateChangeCb, stateChangeCb, "f");
    }
    setStateToUnknow() {
        this.state = {
            version: 0,
            syncedTime: 0,
            connected: false,
            mode: -1
        };
    }
    async getStoredState() {
        const storedState = __classPrivateFieldGet(this, _Handy_device, "f").homey.settings.get(STATE_STORAGE_KEY);
        let needsSync = true;
        if (storedState !== null) {
            __classPrivateFieldGet(this, _Handy_device, "f").log("Got stored state:", storedState);
            if (storedState.version === this.state.version) {
                const deltaTime = Date.now() - storedState.syncedTime;
                if (deltaTime < 10 * 60 * 1000) {
                    __classPrivateFieldGet(this, _Handy_device, "f").log("State in sync");
                    needsSync = false;
                }
                else {
                    __classPrivateFieldGet(this, _Handy_device, "f").log("State sync is old. Needs sync");
                }
            }
            else {
                __classPrivateFieldGet(this, _Handy_device, "f").log("Incompatible stored state version");
            }
        }
        else {
            __classPrivateFieldGet(this, _Handy_device, "f").log("No stored state");
        }
        if (needsSync) {
            try {
                const ok = await this.syncState();
            }
            catch (err) {
                __classPrivateFieldGet(this, _Handy_device, "f").log(err);
            }
        }
    }
    async hampStart(start) {
        try {
            if (this.state.mode !== API_1.Mode.HAMP) {
                await this.setMode(API_1.Mode.HAMP);
            }
            if (start) {
                const res = await this.api.hamp.start(this.connetionKey);
                __classPrivateFieldGet(this, _Handy_device, "f").log(res);
            }
            else {
                const res = await this.api.hamp.hampStop(this.connetionKey);
                __classPrivateFieldGet(this, _Handy_device, "f").log(res);
            }
        }
        catch (err) {
            __classPrivateFieldGet(this, _Handy_device, "f").log(err);
            this.setStateToUnknow();
            throw (err);
        }
    }
    async hampVelocity(velocity) {
        try {
            if (this.state.mode !== API_1.Mode.HAMP) {
                await this.setMode(API_1.Mode.HAMP);
                const res = await this.api.hamp.start(this.connetionKey);
                __classPrivateFieldGet(this, _Handy_device, "f").log(res);
            }
            const res = await this.api.hamp.setHampVelocityPercent(this.connetionKey, { velocity });
            __classPrivateFieldGet(this, _Handy_device, "f").log(res);
        }
        catch (err) {
            __classPrivateFieldGet(this, _Handy_device, "f").log(err);
            this.setStateToUnknow();
            throw (err);
        }
    }
    async getConnected() {
        try {
            const connected = (await this.api.base.isConnected(this.connetionKey)).connected;
            this.state.connected = connected;
            this.updateState();
            return connected;
        }
        catch (err) {
            __classPrivateFieldGet(this, _Handy_device, "f").log(err);
            this.setStateToUnknow();
            throw (err);
        }
        return false;
    }
    async setStrokeZone(min, max) {
        try {
            const res = await this.api.slide.setSlide(this.connetionKey, { min, max });
            __classPrivateFieldGet(this, _Handy_device, "f").log(res);
        }
        catch (err) {
            __classPrivateFieldGet(this, _Handy_device, "f").log(err);
            this.setStateToUnknow();
            throw (err);
        }
    }
    async goToPosition(duration, position) {
        try {
            if (this.state.mode !== API_1.Mode.HDSP) {
                await this.setMode(API_1.Mode.HDSP);
            }
            const res = await this.api.hdsp.nextPositionAbsInTime(this.connetionKey, { position, duration, stopOnTarget: true });
            __classPrivateFieldGet(this, _Handy_device, "f").log(res);
        }
        catch (err) {
            __classPrivateFieldGet(this, _Handy_device, "f").log(err);
            this.setStateToUnknow();
            throw (err);
        }
    }
    async getEstimatedServerTime() {
        let start = Date.now();
        let serverTime = (await this.api.timesync.getServerTime()).serverTime;
        let rtd = Date.now() - start;
        serverTime = Math.round(serverTime + rtd / 2);
        return { rtd, serverTime };
    }
    async playScriptPrest(preset) {
        const url = "https://sweettecheu.s3.eu-central-1.amazonaws.com/preset/" + preset + ".csv";
        await this.playScript(url);
    }
    async playScript(url) {
        try {
            if (this.state.mode !== API_1.Mode.HSSP) {
                await this.setMode(API_1.Mode.HSSP);
            }
            const scriptSetupRes = await this.api.hssp.setup(this.connetionKey, { url });
            __classPrivateFieldGet(this, _Handy_device, "f").log(scriptSetupRes);
            const { rtd, serverTime } = await this.getEstimatedServerTime();
            const serverTimeAltered = Math.round(serverTime - rtd / 2); //Try to play the script from start
            const hsspPlayRes = await this.api.hssp.play(this.connetionKey, { startTime: 0, estimatedServerTime: serverTimeAltered });
            __classPrivateFieldGet(this, _Handy_device, "f").log(hsspPlayRes);
        }
        catch (err) {
            __classPrivateFieldGet(this, _Handy_device, "f").log(err);
            this.setStateToUnknow();
            throw (err);
        }
    }
    async setMode(mode) {
        try {
            let modeRes = (await this.api.base.setMode(this.connetionKey, { mode: mode }));
            if (modeRes.result === 0 || modeRes.result === 1) {
                this.state.mode = mode;
                this.updateState();
            }
        }
        catch (err) {
            __classPrivateFieldGet(this, _Handy_device, "f").log(err);
            this.setStateToUnknow();
            throw (err);
        }
    }
    updateState() {
        // this.state.connected = true;
        __classPrivateFieldGet(this, _Handy_device, "f").homey.settings.set(STATE_STORAGE_KEY, this.state);
        if (__classPrivateFieldGet(this, _Handy_stateChangeCb, "f") !== undefined) {
            __classPrivateFieldGet(this, _Handy_stateChangeCb, "f").call(this, this.state);
        }
    }
    async syncState() {
        __classPrivateFieldGet(this, _Handy_device, "f").log("Syncing state");
        try {
            this.state.connected = (await this.api.base.isConnected(this.connetionKey)).connected;
            if (this.state.connected) {
                const modeRes = (await this.api.base.getMode(this.connetionKey));
                if (modeRes.result === 0) {
                    this.state.mode = modeRes.mode;
                }
                else {
                    return false;
                }
                this.state.syncedTime = Date.now();
                __classPrivateFieldGet(this, _Handy_device, "f").log("State synced", this.state);
                this.updateState();
                return true;
            }
        }
        catch (err) {
            __classPrivateFieldGet(this, _Handy_device, "f").log(err);
            this.setStateToUnknow();
            throw (err);
        }
        return false;
    }
}
exports.default = Handy;
_Handy_device = new WeakMap(), _Handy_stateChangeCb = new WeakMap();
