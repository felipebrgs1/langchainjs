import Models from "./Model";
import Template from "./Prompts";
import readline from "readline";

// Inversão de dependência: injeta modelo e template
async function runChat(model: any, promptTemplate: any) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let chatHistory: any[] = [];

    while (true) {
        const userInput = await new Promise<string>((resolve) =>
            rl.question("Você: ", resolve)
        );
        if (userInput.trim().toLowerCase() === "exit") break;

        chatHistory.push({ role: "human", content: userInput });
        const messages = await promptTemplate.formatMessages({ msgs: chatHistory });
        const response = await model.invoke(messages);
        const botMessage = response.content ?? response.text ?? String(response);

        console.log("Bot:", botMessage);

        chatHistory.push({ role: "ai", content: botMessage });
    }

    rl.close();
}

async function main() {
    const model = Models.GeminiFlash2;
    const prompt = await Template[0]();

    await runChat(model, prompt);
}

main().catch(console.error);