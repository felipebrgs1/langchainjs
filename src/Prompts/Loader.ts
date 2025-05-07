import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";


const loader = new PDFLoader(`./src/Prompts/{pdf}`, {
    splitPages: true,
});

const docs = await loader.load();