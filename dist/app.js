"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var express = require("express");
var bodyParser = require("body-parser");
var path_2 = __importDefault(require("./utils/path"));
var home_1 = require("./routes/home");
console.log(JSON.stringify(fs_1.default));
var app = express();
app.set("view engine", "ejs");
app.set("views", "dist/views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path_1.default.join(__dirname, "public")));
app.use(express.static(path_1.default.join(path_2.default, "..", "node_modules", "jquery", "dist")));
app.use(express.static(path_1.default.join(path_2.default, "..", "node_modules", "bootstrap", "dist", "js")));
app.use(express.static(path_1.default.join(path_2.default, "..", "node_modules", "bootstrap", "dist", "css")));
app.use(home_1.router);
app.listen(process.env.PORT || 3000);
