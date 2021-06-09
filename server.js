"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
exports.__esModule = true;
var app_json_1 = require("./app.json");
require('dotenv').config();
var spa_server_1 = require("@nico-martin/spa-server");
var node_fetch_1 = require("node-fetch");
var apiBase = process.env.API_BASE || 'https://api.pwadvent.dev/';
var apiKey = process.env.API_KEY || false;
var dayUrl = function (day) {
    return apiBase + "wp-json/advent-calendar/v1/days/" + day + "/" + (apiKey ? "?apiKey=" + apiKey : '');
};
var pageUrl = function (slug) { return apiBase + "wp-json/advent-calendar/v1/page/" + slug + "/"; };
var imageTwitter = 'https://api.pwadvent.dev/wp-content/uploads/2020/11/twitter-1.jpg';
var imageOg = 'https://api.pwadvent.dev/wp-content/uploads/2020/11/facebook-1.jpg';
var usePropery = function (name, content) { return ({
    tag: 'meta',
    attributes: {
        property: name,
        content: content
    }
}); };
var defaultMetas = {
    title: app_json_1["default"].title + " \u2744 " + app_json_1["default"].description,
    description: app_json_1["default"].about,
    'og:image': usePropery('og:image', imageOg),
    'og:title': usePropery('og:title', app_json_1["default"].title + " \u2744 " + app_json_1["default"].description),
    'og:description': usePropery('og:description', app_json_1["default"].about),
    'og:locale': usePropery('og:locale', 'en_US'),
    'og:type': usePropery('og:type', 'website'),
    'twitter:title': app_json_1["default"].title + " \u2744 " + app_json_1["default"].description,
    'twitter:description': app_json_1["default"].about,
    'twitter:image': imageTwitter,
    'twitter:card': 'summary_large_image'
};
var getMetas = function (metas) { return (__assign(__assign(__assign(__assign(__assign(__assign({}, defaultMetas), metas), (!('og:title' in metas) && 'title' in metas
    ? { 'og:title': usePropery('og:title', metas.title) }
    : {})), (!('og:description' in metas) && 'description' in metas
    ? { 'og:description': usePropery('og:description', metas.description) }
    : {})), (!('twitter:title' in metas) && 'title' in metas
    ? { 'twitter:title': metas.title }
    : {})), (!('twitter:description' in metas) && 'description' in metas
    ? { 'twitter:description': metas.description }
    : {}))); };
spa_server_1["default"]({
    routes: [
        {
            path: '/',
            response: function (request) { return ({
                metas: defaultMetas
            }); }
        },
        {
            path: '/day/:id/',
            response: function (request) { return __awaiter(void 0, void 0, void 0, function () {
                var metas, statusCode, resp, respJson, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            metas = {};
                            statusCode = 200;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, node_fetch_1["default"](dayUrl(request.params.id))];
                        case 2:
                            resp = _a.sent();
                            if (!resp.ok) {
                                throw new Error('Fetch failed');
                            }
                            return [4 /*yield*/, resp.json()];
                        case 3:
                            respJson = _a.sent();
                            metas = __assign(__assign({ title: respJson.title + " \u2744 " + app_json_1["default"].title, description: respJson.preview }, (respJson.previewImages.facebook
                                ? {
                                    'og:image': usePropery('og:image', respJson.previewImages.facebook)
                                }
                                : {})), (respJson.previewImages.twitter
                                ? { 'twitter:image': respJson.previewImages.twitter }
                                : {}));
                            if (respJson.source) {
                                metas['canonical'] = {
                                    tag: 'link',
                                    attributes: {
                                        rel: 'canonical',
                                        href: respJson.source
                                    }
                                };
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            statusCode = 404;
                            metas = {
                                title: "Error 404 \u2744 " + app_json_1["default"].title
                            };
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/, {
                                metas: getMetas(metas),
                                statusCode: statusCode
                            }];
                    }
                });
            }); }
        },
        {
            path: '/:page/:slug?/',
            response: function (request) { return __awaiter(void 0, void 0, void 0, function () {
                var metas, statusCode, resp, respJson, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            metas = {};
                            statusCode = 200;
                            // @ts-ignore
                            if (request.params.page === 'email-notification') {
                                return [2 /*return*/, {
                                        metas: {
                                            title: app_json_1["default"].title + " \u2744 " + app_json_1["default"].description,
                                            description: app_json_1["default"].about
                                        }
                                    }];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, node_fetch_1["default"](pageUrl(request.params.slug))];
                        case 2:
                            resp = _a.sent();
                            if (!resp.ok) {
                                throw new Error('Fetch failed');
                            }
                            return [4 /*yield*/, resp.json()];
                        case 3:
                            respJson = _a.sent();
                            metas = {
                                title: respJson.title + " \u2744 " + app_json_1["default"].title,
                                description: respJson.excerpt
                            };
                            return [3 /*break*/, 5];
                        case 4:
                            error_2 = _a.sent();
                            statusCode = 404;
                            metas = {
                                title: "Error 404 \u2744 " + app_json_1["default"].title
                            };
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/, {
                                metas: getMetas(metas),
                                statusCode: statusCode
                            }];
                    }
                });
            }); }
        },
    ],
    port: parseInt(process.env.PORT) || 80,
    indexFile: 'index-serve.html',
    serveDir: 'dist/',
    //logLevel: 'DEBUG',
    logLevel: 'ERROR'
});
