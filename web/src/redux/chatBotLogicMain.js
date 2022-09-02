import { startScript as startScript_base } from "./chatBotLogic/script_base";

export default function ChatBotReducer(botScriptName, botPhase, userMessage) {
    switch(botScriptName)
    {
        case 'script:base': return startScript_base(botPhase, userMessage)
    }
}