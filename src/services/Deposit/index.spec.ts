import { list, deposit } from './index';
import { Deposit } from './types';
import API from '../Api';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(API);

describe('Deposit service', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should fetch the list of deposits', async () => {
        const mockData = {
            data: {
                data: [
                    { id: 1, amount: 1000 },
                    { id: 2, amount: 2000 }
                ]
            }
        };

        mock.onGet('/deposit').reply(200, mockData);

        const result = await list();

        expect(result).toEqual(mockData.data.data);
    });

    it('should create a new deposit with an image', async () => {
        const mockDeposit: Deposit = { amount: 1000, image: new File([""], "image.png") };
        const mockResponse = { id: 1, amount: 1000, image: 'image.png' };

        mock.onPost('/deposit').reply(200, { data: mockResponse });

        const result = await deposit(mockDeposit);

        expect(result).toEqual({ data: mockResponse });
    });
});
