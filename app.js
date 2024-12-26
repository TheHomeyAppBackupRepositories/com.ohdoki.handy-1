"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homey_1 = __importDefault(require("homey"));
class MyApp extends homey_1.default.App {
    /**
     * onInit is called when the app is initialized.
     */
    async onInit() {
        this.log('The Handy app has been initialized');
        const onlineIntervalTime = this.homey.settings.get('interval-time');
        this.log("onlineIntervalTime:", onlineIntervalTime);
        if (onlineIntervalTime === null) {
            this.homey.settings.set('interval-time', 10000);
        }
    }
}
module.exports = MyApp;
