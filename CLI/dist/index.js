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
const readline = __importStar(require("node:readline"));
const rl = readline.createInterface(process.stdin, process.stdout);
const debounce = (fn, ms) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};
rl.question("Write anything you like\n", function (answer) {
    const func = () => {
        console.log(answer);
    };
    const debouncedAnswer = debounce(func, 1000);
    debouncedAnswer();
    rl.setPrompt(`
    Your message is going to appear after one second\n
    If you wanna see it again write anything and hit enter\n
    If you wanna leave, write exit\n
`);
    rl.prompt();
    rl.on("line", function (saying) {
        debouncedAnswer();
        if (saying.toLocaleLowerCase().trim() === "exit") {
            rl.close();
        }
        else {
            rl.setPrompt(`
    Your message is going to appear after one second\n
    If you wanna see it again write anything and hit enter\n
    If you wanna leave, write exit\n
`);
            rl.prompt();
        }
    });
});
