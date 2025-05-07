import {
    ChatPromptTemplate,
    MessagesPlaceholder,
} from "@langchain/core/prompts";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { HumanMessage } from "@langchain/core/messages";
import fs from 'fs';
import path from 'path';

// Função para carregar e concatenar textos dos PDFs
async function loadPDFTexts(dirPath: string) {
    const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.pdf'));
    const pdfTexts: string[] = [];

    for (const file of files) {
        const loader = new PDFLoader(path.join(dirPath, file));
        const docs = await loader.load();
        const combinedText = docs.map(doc => doc.pageContent).join('\n');
        pdfTexts.push(`Conteúdo do arquivo ${file}:\n${combinedText}`);
    }

    return pdfTexts.join('\n\n');
}

export async function createPromptWithPDFs() {
    const pdfContent = await loadPDFTexts('./Docs');

    return ChatPromptTemplate.fromMessages([
        ["system", `Você é um assistente.\n\n Aqui estão os documentos de referência:\n${pdfContent}, você deve falar em qual documento está se baseando para responder as perguntas e qual pagina utilizou.`],
        new MessagesPlaceholder("msgs"),
    ]);
}
