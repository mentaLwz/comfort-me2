import { createOpenAI, openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

const deepSeek = createOpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.OPENAI_API_KEY!,
});

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    // model: openai(apiIdentifier),
    model: deepSeek("deepseek-chat"),
    middleware: customMiddleware,
  });
};
