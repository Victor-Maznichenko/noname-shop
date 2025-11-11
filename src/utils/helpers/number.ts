/**
 * Вычисляет старую (первоначальную) цену товара до применения скидки.
 *
 * @param {number} price - Текущая цена товара после скидки.
 * @param {number} discountPercentage - Процент скидки (от 0 до 100).
 * @returns {number} Старая цена товара, округлённая до ближайшего целого числа вниз.
 */
export const calcOldPrice = (price: number, discountPercentage: number) =>
  Math.floor(price / (1 - discountPercentage / 100));

/**
 * Форматирует число в строку с валютным форматом (USD).
 *
 * @param {number} value - Числовое значение для форматирования.
 * @returns {string} Отформатированная строка в формате валюты (например, "$1,200").
 */
export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
