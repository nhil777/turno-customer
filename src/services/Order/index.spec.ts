import { list, purchase } from './index';
import { Order } from './types';
import API from '../Api';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(API);

describe('Order service', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should fetch the list of orders', async () => {
        const mockData = {
            data: {
                data: [
                    { id: 1, amount: 100, description: 'Order 1' },
                    { id: 2, amount: 200, description: 'Order 2' }
                ]
            }
        };

        mock.onGet('/order').reply(200, mockData);

        const result = await list();

        expect(result).toEqual(mockData.data.data);
    });

    it('should create a new order', async () => {
        const mockOrder: Order = { amount: 300, description: 'Order 3' };
        const mockResponse = { id: 3, amount: 300, description: 'Order 3' };

        mock.onPost('/order').reply(200, { data: mockResponse });

        const result = await purchase(mockOrder);

        expect(result).toEqual({ data: mockResponse });
    });
});
