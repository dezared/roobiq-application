import { createSlice } from '@reduxjs/toolkit'
import ChatBotReducer from './chatBotLogicMain'

export const chatScriptSlice = createSlice({
  name: 'chatScript',
  initialState: {
    scriptPhase: 'script:none',
    botReduceMessage: '',
    botPhase: 'PHASE_UNKNOWN',
    messages: []
  },
  reducers: {
    startBaseScript: state => {
        state.scriptPhase = 'script:base'
        state.botPhase = 'PHASE_START'
    },
    chatBotCallBackMessage: (state, action) => {
        state.messages.push(action.payload)
        let botmessage = ChatBotReducer(state.scriptPhase, state.botPhase, action.payload)
        state.botReduceMessage = botmessage
        state.messages.push(botmessage)
    }
  }
})

export default chatScriptSlice.reducer