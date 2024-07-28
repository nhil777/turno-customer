import { index } from './index';
import { Profile } from './types';
import API from '../Api';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(API);

describe('Profile service', () => {
    beforeEach(() => {
        mock.reset();
    });

    it('should fetch the profile', async () => {
        const mockData: Profile = {
            balance: 5000,
            totalIncome: 10000,
            totalExpense: 5000,
            lastTransactions: [
                { id: 1, amount: 1000, transaction_date: '2024-01-01', type: 'income' },
                { id: 2, amount: 500, transaction_date: '2024-01-02', type: 'expense' }
            ]
        };

        mock.onGet('/profile').reply(200, { data: mockData });

        const result = await index();

        expect(result).toEqual(mockData);
    });
});
