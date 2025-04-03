import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function Compliment() {
  const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {"role": "user", "content": "You are a word generator. Provide a single word that can compliment a person in a meaningful positive way, just the word"},
    ],
    max_tokens:2
  });
  return (await completion).choices[0].message.content;
}