"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handyApi = void 0;
const AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
const BaseService_1 = require("./services/BaseService");
const HampService_1 = require("./services/HampService");
const HdspService_1 = require("./services/HdspService");
const HsspService_1 = require("./services/HsspService");
const HstpService_1 = require("./services/HstpService");
const MaintenanceService_1 = require("./services/MaintenanceService");
const OtaService_1 = require("./services/OtaService");
const SlideService_1 = require("./services/SlideService");
const TimesyncService_1 = require("./services/TimesyncService");
class handyApi {
    constructor(config, HttpRequest = AxiosHttpRequest_1.AxiosHttpRequest) {
        var _a, _b, _c, _d;
        this.request = new HttpRequest({
            BASE: (_a = config === null || config === void 0 ? void 0 : config.BASE) !== null && _a !== void 0 ? _a : 'https://www.handyfeeling.com/api/handy/v2',
            VERSION: (_b = config === null || config === void 0 ? void 0 : config.VERSION) !== null && _b !== void 0 ? _b : '2.0.0-beta-3',
            WITH_CREDENTIALS: (_c = config === null || config === void 0 ? void 0 : config.WITH_CREDENTIALS) !== null && _c !== void 0 ? _c : false,
            CREDENTIALS: (_d = config === null || config === void 0 ? void 0 : config.CREDENTIALS) !== null && _d !== void 0 ? _d : 'include',
            TOKEN: config === null || config === void 0 ? void 0 : config.TOKEN,
            USERNAME: config === null || config === void 0 ? void 0 : config.USERNAME,
            PASSWORD: config === null || config === void 0 ? void 0 : config.PASSWORD,
            HEADERS: config === null || config === void 0 ? void 0 : config.HEADERS,
            ENCODE_PATH: config === null || config === void 0 ? void 0 : config.ENCODE_PATH,
        });
        this.base = new BaseService_1.BaseService(this.request);
        this.hamp = new HampService_1.HampService(this.request);
        this.hdsp = new HdspService_1.HdspService(this.request);
        this.hssp = new HsspService_1.HsspService(this.request);
        this.hstp = new HstpService_1.HstpService(this.request);
        this.maintenance = new MaintenanceService_1.MaintenanceService(this.request);
        this.ota = new OtaService_1.OtaService(this.request);
        this.slide = new SlideService_1.SlideService(this.request);
        this.timesync = new TimesyncService_1.TimesyncService(this.request);
    }
}
exports.handyApi = handyApi;
