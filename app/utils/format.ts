// lib/utils.ts ou utils/format.ts
export const formatCompactNumber = (number: number) => {
  return Intl.NumberFormat('pt-BR', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(number);
};