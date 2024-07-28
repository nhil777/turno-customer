interface LastTransaction {
    id: number;
    amount: number;
    transaction_date: string;
    type: 'income' | 'expense';
}

export interface Profile {
    balance: number;
    totalIncome: number;
    totalExpense: number;
    lastTransactions: LastTransaction[];
}
