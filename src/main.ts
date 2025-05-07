import Models from "./Model";
import Template from "./Prompts";
import readline from "readline";

// Inversão de dependência: injeta modelo e template
async function runChat(model: any, promptTemplate: any) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("Chatbot iniciado. Digite 'exit' para sair.");

    while (true) {
        const userInput = await new Promise<string>((resolve) =>
            rl.question("Você: ", resolve)
        );
        if (userInput.trim().toLowerCase() === "exit") break;

        // Aqui você pode adaptar para o formato do seu modelo/prompt
        const prompt = promptTemplate.createPrompt(userInput);
        const response = await model.generate(prompt);

        console.log("Bot:", response);
    }

    rl.close();
}

async function main() {
    // Exemplo: usa o primeiro modelo e prompt disponíveis
    const model = Models.GeminiFlash2;
    const prompt = Template[0]

    await runChat(model, prompt);
}

main().catch(console.error);