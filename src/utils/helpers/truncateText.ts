/**
 * Обрезает строку до указанного количества символов.
 * Если длина строки превышает заданный лимит, возвращает усечённый вариант.
 *
 * @param {string} text - Исходный текст для обрезки.
 * @param {number} limit - Максимальное количество символов.
 * @returns {string} Усечённая строка, если длина превышает лимит; иначе исходный текст.
 */
export const truncateText = (text: string, limit: number) => {
  if (text.length > limit) {
    return `${text.substring(0, limit)}`;
  }
  return text;
};
