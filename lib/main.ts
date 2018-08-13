import { Twitch, Message, ChannelUserState } from "twitch-wrapper-ts"

const twitch: Twitch = new Twitch(
    "hoshiWatcher",
    "outhkey",
    "hoshiiiko",
    "seperated"
);

twitch.connect();
twitch.on("connected", () => console.log("Connected to channel: Hoshiiiko"));
twitch.on("message",(
    message: Message,
    channelState: ChannelUserState
) => console.log(`${message.displayName}: ${message.content}`))
