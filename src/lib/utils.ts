import translations from './translations';

type Language = 'en' | 'th';

/**
 * Extracts the result from a response that might contain <think>...</think> tags
 * Also cleans up JSON code blocks and extra newlines
 * @param text The response text
 * @returns The cleaned response text
 */
export function extractResultFromThinking(text: string): string {
    const result = text;
    if (result.includes("</think>")) {
      return result.split("</think>")[1].trim();
    }
    return result.trim();
  }

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function translate(key: string, language: Language): string {
  if (!translations[key]) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  return translations[key][language];
}
  