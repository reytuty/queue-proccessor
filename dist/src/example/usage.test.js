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
var globals_1 = require("@jest/globals");
var index_1 = require("../index");
var queueProccessorNumber = new index_1.QueueProccessor(function (data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(data);
        }, 100);
    });
});
var queueProccessorString = new index_1.QueueProccessor(function (data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(data);
        }, 100);
    });
});
var queueProccessorObject = new index_1.QueueProccessor(function (data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(data);
        }, 100);
    });
});
var queueProccessorArray = new index_1.QueueProccessor(function (data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(data);
        }, 100);
    });
});
(0, globals_1.describe)("Testing QueueProccessor with Numbers", function () {
    (0, globals_1.it)("must to create a queue", function () {
        queueProccessorNumber.add(1);
        queueProccessorNumber.add(2);
        queueProccessorNumber.add(3);
        queueProccessorNumber.add(4);
        (0, globals_1.expect)(queueProccessorNumber.queueLength).toBe(4);
    });
    (0, globals_1.it)("must to start the queue", function () {
        queueProccessorNumber.start();
        (0, globals_1.expect)(queueProccessorNumber.isStarted).toBe(true);
    });
    (0, globals_1.it)("must to proccess the queue", function (done) {
        setTimeout(function () {
            (0, globals_1.expect)(queueProccessorNumber.isProccessing).toBe(false);
            (0, globals_1.expect)(queueProccessorNumber.queueLength).toBe(0);
            done();
        }, 500);
    });
    (0, globals_1.it)("must to add more data to the queue", function () {
        queueProccessorNumber.add(5);
        queueProccessorNumber.add(6);
        queueProccessorNumber.add(7);
        queueProccessorNumber.add(8);
        (0, globals_1.expect)(queueProccessorNumber.queueLength).toBe(4);
    });
    (0, globals_1.it)("must to stop the queue and save some itens to handle", function () {
        queueProccessorNumber.stop();
        (0, globals_1.expect)(queueProccessorNumber.isStarted).toBe(false);
        (0, globals_1.expect)(queueProccessorNumber.queueLength).toBeGreaterThan(0);
    });
    (0, globals_1.it)("must to start the queue again", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queueProccessorNumber.start();
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve(true);
                            }, 500);
                        })];
                case 1:
                    _a.sent();
                    (0, globals_1.expect)(queueProccessorNumber.isProccessing).toBe(false);
                    (0, globals_1.expect)(queueProccessorNumber.queueLength).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("Testing QueueProccessor with String", function () {
    (0, globals_1.it)("must to create a queue", function () {
        queueProccessorString.add("the string with 1");
        queueProccessorString.add("the string with 2");
        queueProccessorString.add("the string with 3");
        queueProccessorString.add("the string with 4");
        (0, globals_1.expect)(queueProccessorString.queueLength).toBe(4);
    });
    (0, globals_1.it)("must to start the queue", function () {
        queueProccessorString.start();
        (0, globals_1.expect)(queueProccessorString.isStarted).toBe(true);
    });
    (0, globals_1.it)("must to proccess the queue", function (done) {
        setTimeout(function () {
            (0, globals_1.expect)(queueProccessorString.isProccessing).toBe(false);
            (0, globals_1.expect)(queueProccessorString.queueLength).toBe(0);
            done();
        }, 500);
    });
    (0, globals_1.it)("must to add more data to the queue", function () {
        queueProccessorString.add("the string with 5");
        queueProccessorString.add("the string with 6");
        queueProccessorString.add("the string with 7");
        queueProccessorString.add("the string with 8");
        (0, globals_1.expect)(queueProccessorString.queueLength).toBe(4);
    });
    (0, globals_1.it)("must to stop the queue and save some itens to handle", function () {
        queueProccessorString.stop();
        (0, globals_1.expect)(queueProccessorString.isStarted).toBe(false);
        (0, globals_1.expect)(queueProccessorString.queueLength).toBeGreaterThan(0);
    });
    (0, globals_1.it)("must to start the queue again", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queueProccessorString.start();
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve(true);
                            }, 500);
                        })];
                case 1:
                    _a.sent();
                    (0, globals_1.expect)(queueProccessorString.isProccessing).toBe(false);
                    (0, globals_1.expect)(queueProccessorString.queueLength).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("Testing QueueProccessor with Object", function () {
    (0, globals_1.it)("must to create a queue", function () {
        queueProccessorObject.add({ id: 1 });
        queueProccessorObject.add({ id: 2 });
        queueProccessorObject.add({ id: 3 });
        queueProccessorObject.add({ id: 4 });
        (0, globals_1.expect)(queueProccessorObject.queueLength).toBe(4);
    });
    (0, globals_1.it)("must to start the queue", function () {
        queueProccessorObject.start();
        (0, globals_1.expect)(queueProccessorObject.isStarted).toBe(true);
    });
    (0, globals_1.it)("must to proccess the queue", function (done) {
        setTimeout(function () {
            (0, globals_1.expect)(queueProccessorObject.isProccessing).toBe(false);
            (0, globals_1.expect)(queueProccessorObject.queueLength).toBe(0);
            done();
        }, 500);
    });
    (0, globals_1.it)("must to add more data to the queue", function () {
        queueProccessorObject.add({ id: 5 });
        queueProccessorObject.add({ id: 6 });
        queueProccessorObject.add({ id: 7 });
        queueProccessorObject.add({ id: 8 });
        (0, globals_1.expect)(queueProccessorObject.queueLength).toBe(4);
    });
    (0, globals_1.it)("must to stop the queue and save some itens to handle", function () {
        queueProccessorObject.stop();
        (0, globals_1.expect)(queueProccessorObject.isStarted).toBe(false);
        (0, globals_1.expect)(queueProccessorObject.queueLength).toBeGreaterThan(0);
    });
    (0, globals_1.it)("must to start the queue again", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queueProccessorObject.start();
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve(true);
                            }, 500);
                        })];
                case 1:
                    _a.sent();
                    (0, globals_1.expect)(queueProccessorObject.isProccessing).toBe(false);
                    (0, globals_1.expect)(queueProccessorObject.queueLength).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
(0, globals_1.describe)("Testing QueueProccessor with Array", function () {
    (0, globals_1.it)("must to create a queue", function () {
        queueProccessorArray.add([1, 2, 3]);
        queueProccessorArray.add([4, 5, 6]);
        queueProccessorArray.add([7, 8, 9]);
        queueProccessorArray.add([10, 11, 12]);
        (0, globals_1.expect)(queueProccessorArray.queueLength).toBe(4);
    });
    (0, globals_1.it)("must to start the queue", function () {
        queueProccessorArray.start();
        (0, globals_1.expect)(queueProccessorArray.isStarted).toBe(true);
    });
    (0, globals_1.it)("must to proccess the queue", function (done) {
        setTimeout(function () {
            (0, globals_1.expect)(queueProccessorArray.isProccessing).toBe(false);
            (0, globals_1.expect)(queueProccessorArray.queueLength).toBe(0);
            done();
        }, 500);
    });
    (0, globals_1.it)("must to add more data to the queue", function () {
        queueProccessorArray.add([13, 14, 15]);
        queueProccessorArray.add([16, 17, 18]);
        queueProccessorArray.add([19, 20, 21]);
        queueProccessorArray.add([22, 23, 24]);
        (0, globals_1.expect)(queueProccessorArray.queueLength).toBe(4);
    });
    (0, globals_1.it)("must to stop the queue and save some itens to handle", function () {
        queueProccessorArray.stop();
        (0, globals_1.expect)(queueProccessorArray.isStarted).toBe(false);
        (0, globals_1.expect)(queueProccessorArray.queueLength).toBeGreaterThan(0);
    });
    (0, globals_1.it)("must to start the queue again", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queueProccessorArray.start();
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve(true);
                            }, 500);
                        })];
                case 1:
                    _a.sent();
                    (0, globals_1.expect)(queueProccessorArray.isProccessing).toBe(false);
                    (0, globals_1.expect)(queueProccessorArray.queueLength).toBe(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
