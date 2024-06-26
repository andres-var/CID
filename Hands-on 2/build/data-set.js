"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSet = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class DataSet {
    constructor() {
        this.x = [];
        this.y = [];
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    load(source) {
        const fullPath = path.join(__dirname, source);
        const data = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        this.x = data.map(d => d.x);
        this.y = data.map(d => d.y);
    }
}
exports.DataSet = DataSet;
//# sourceMappingURL=data-set.js.map