"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twitch_wrapper_ts_1 = require("twitch-wrapper-ts");
const twitch = new twitch_wrapper_ts_1.Twitch("hoshiWatcher", "v84177bdocu5fcgv429xf1vtpp88ng", "hoshiiiko", "seperated");
twitch.connect();
twitch.on("connected", () => console.log("Connected!!"));
twitch.on("message", (message, channelState) => console.log(message));
//# sourceMappingURL=main.js.map