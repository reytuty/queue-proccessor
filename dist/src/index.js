"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueProccessor = void 0;
/**
 * @author Renato Miawaki
 * @class QueueProccessor
 * @description A class to handle a queue of data to proccess
 */
var QueueProccessor = /** @class */ (function () {
    function QueueProccessor(proccessor) {
        this.proccessor = proccessor;
        this.queue = [];
        this.proccessing = false;
        this.started = false;
        this.procccessLoopId = null;
    }
    QueueProccessor.prototype.start = function () {
        this.started = true;
        if (this.queue.length) {
            this.proccessQueue();
            return;
        }
        this.startCheck();
    };
    QueueProccessor.prototype.startCheck = function () {
        var _this = this;
        if (this.procccessLoopId) {
            clearInterval(this.procccessLoopId);
        }
        this.procccessLoopId = setInterval(function () {
            _this.checkQueue();
        }, 1000);
    };
    Object.defineProperty(QueueProccessor.prototype, "isProccessing", {
        get: function () {
            return this.proccessing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueProccessor.prototype, "isStarted", {
        get: function () {
            return this.started;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueueProccessor.prototype, "queueLength", {
        get: function () {
            return this.queue.length;
        },
        enumerable: false,
        configurable: true
    });
    QueueProccessor.prototype.stopCheck = function () {
        clearInterval(this.procccessLoopId);
        this.procccessLoopId = null;
    };
    QueueProccessor.prototype.checkQueue = function () {
        if (!this.started) {
            this.stopCheck();
            return;
        }
        if (this.queue.length) {
            this.stopCheck();
            this.proccessQueue();
            return;
        }
    };
    QueueProccessor.prototype.add = function (data) {
        this.queue.push(data);
    };
    QueueProccessor.prototype.proccess = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.proccessor(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QueueProccessor.prototype.proccessQueue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.proccessing = true;
                        _a.label = 1;
                    case 1:
                        if (!(this.queue.length && this.started)) return [3 /*break*/, 4];
                        data = this.queue.shift();
                        if (!data) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.proccess(data)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 1];
                    case 4:
                        this.proccessing = false;
                        if (this.started) {
                            return [2 /*return*/, this.startCheck()];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QueueProccessor.prototype.stop = function () {
        this.started = false;
        this.stopCheck();
    };
    return QueueProccessor;
}());
exports.QueueProccessor = QueueProccessor;
