export const toCents = (amount: number): number => amount * 100;
export const fromCents = (amount: number): number => amount / 100;
export const formatAmount = (amount: number): string => (amount / 100).toFixed(2);
export const convertDateString = (dateString: string) => new Date(dateString).toLocaleString('en-US');
