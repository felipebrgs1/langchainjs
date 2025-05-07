
---

# langchainjs

## 📦 Install dependencies

```bash
npm install
```

## ⚙️ Setup

Create a `.env` file and add your Google API key:

```
GOOGLE_API_KEY=your_google_api_key_here
```

You can get a free API key at [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey).

## ▶️ Run the application

```bash
npm run dev
```

## 📄 Read documents

To read documents, place a file inside the `/Docs` folder **and restart the application**.

## 💬 Example interaction

```bash
Você: segundo a constituição, quantos vereadores um município com 500 mil habitantes deverá ter
Bot: Segundo o Art. 29, IV, f da Constituição Federal, um município com mais de 300.000 habitantes e de até 450.000 habitantes deve ter 23 vereadores, e um município com mais de 450.000 habitantes e de até 600.000 habitantes deve ter 25 vereadores. Portanto, um município com 500 mil habitantes deverá ter 25 vereadores.
```

## ✏️ Modify the prompt

You can modify the prompt in:

```typescript
/src/Prompts/chatbot.ts
```

Currently, it is configured with a maximum of **500 output tokens**.

---
