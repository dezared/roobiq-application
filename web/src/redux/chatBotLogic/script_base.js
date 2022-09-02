export function startScript(botPhase, userMessage) {
    if(botPhase === "PHASE_START") {
        if(userMessage === "hello")
            return 'Hello, I am Roobiq'
        else if(userMessage === 'ad')
            return 'HELL YEAH'
    }
}