"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homey_1 = __importDefault(require("homey"));
const handy_1 = __importDefault(require("../../logic/handy"));
class MyDevice extends homey_1.default.Device {
    /**
     * onInit is called when the device is initialized.
     */
    async onInit() {
        var _a;
        this.log('MyDevice (handy) has been initialized');
        this.unsetWarning();
        const onlineIntervalTime = this.homey.settings.get('interval-time');
        this.log("onlineIntervalTime:", onlineIntervalTime);
        const key = this.getSettings().key;
        this.log("key:", key);
        this.handy = new handy_1.default(key, this, (state) => {
            this.log("On state change", state);
            this.setCapabilityValue("state_online", state.connected);
            this.setCapabilityValue("state_mode", state.mode);
        });
        this.setCapabilityValue("hamp", false);
        this.registerCapabilityListener("hamp", async (start, listner) => {
            var _a;
            this.log("onHamp. value:", start);
            this.log("listner:", listner);
            await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.hampStart(start));
            this.setCapabilityValue("hamp", start);
            this.setCapabilityValue("hamp_velocity", 0);
        });
        this.setCapabilityValue("hamp_velocity", 0);
        this.registerCapabilityListener("hamp_velocity", async (velocity) => {
            var _a;
            this.log("hamp_velocity. value:", velocity);
            await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.hampVelocity(velocity));
        });
        this.setCapabilityValue("set_position", 0);
        this.registerCapabilityListener("set_position", async (position) => {
            var _a;
            this.log("set_position. value:", position);
            await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.goToPosition(position, 500));
            this.setCapabilityValue("set_position", position);
        });
        // this.setCapabilityValue("stroke_zone", "full");
        this.registerCapabilityListener("stroke_zone", async (stroke) => {
            var _a;
            this.log("set_position. value:", stroke);
            let min = 0;
            let max = 100;
            if (stroke === "full") {
                min = 0;
                max = 100;
            }
            else if (stroke === "tip") {
                min = 67;
                max = 100;
            }
            else if (stroke === "base") {
                min = 0;
                max = 33;
            }
            else if (stroke === "base-md") {
                min = 0;
                max = 50;
            }
            else if (stroke === "base-lg") {
                min = 0;
                max = 67;
            }
            else if (stroke === "middle") {
                min = 33;
                max = 67;
            }
            await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.setStrokeZone(min, max));
            // this.setCapabilityValue("set_position", stroke);
        });
        this.setCapabilityValue("set_position", 0);
        this.registerCapabilityListener("set_position", async (position) => {
            var _a;
            this.log("set_position. value:", position);
            // this.setWarning("Not online!")
            await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.goToPosition(position, 500));
        });
        //TODO: Add play script and play script presset
        // this.setCapabilityValue("play_sc", 0);
        this.registerCapabilityListener("play_script_preset", async (preset) => {
            var _a;
            this.log("play_script_preset. value:", preset);
            await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.playScriptPrest(preset));
        });
        this.registerCapabilityListener("play_script", async (url) => {
            var _a;
            this.log("play_script. value:", url);
            await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.playScript(url));
        });
        //TODO: Add more states
        let device = this; // We're in a Device instance
        let tokens = {};
        let state = {};
        await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.getConnected());
        let connected = this.handy.state.connected;
        this.homey.setInterval(async () => {
            var _a;
            try {
                const con = await ((_a = this.handy) === null || _a === void 0 ? void 0 : _a.getConnected());
                if (typeof con === 'boolean' && con !== connected) {
                    this.log("Triger connected change. from,to:", connected, con);
                    connected = con;
                    if (connected) {
                        this.driver.triggerOnline(device, tokens, state);
                    }
                    else {
                        this.driver.triggerOffline(device, tokens, state);
                    }
                    this.handy.state.connected = connected;
                }
            }
            catch (error) {
            }
        }, onlineIntervalTime);
    }
    /**
     * onAdded is called when the user adds the device, called just after pairing.
     */
    async onAdded() {
        this.log('MyDevice has been added');
    }
    /**
     * onSettings is called when the user updates the device's settings.
     * @param {object} event the onSettings event data
     * @param {object} event.oldSettings The old settings object
     * @param {object} event.newSettings The new settings object
     * @param {string[]} event.changedKeys An array of keys changed since the previous version
     * @returns {Promise<string|void>} return a custom message that will be displayed
     */
    async onSettings({ oldSettings: {}, newSettings: {}, changedKeys: {} }) {
        this.log('MyDevice settings where changed');
    }
    /**
     * onRenamed is called when the user updates the device's name.
     * This method can be used this to synchronise the name to the device.
     * @param {string} name The new name
     */
    async onRenamed(name) {
        this.log('MyDevice was renamed');
    }
    /**
     * onDeleted is called when the user deleted the device.
     */
    async onDeleted() {
        this.log('MyDevice has been deleted');
    }
}
module.exports = MyDevice;
