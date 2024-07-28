import API from '../Api';
import { Order } from './types';

export const list = async (): Promise<Order[]> => {
    const { data: response } = await API.get('/order');

    return response.data.data;
}

export const purchase = async ({ amount, description }: Order): Promise<Order> => {
    const response = await API.post('/order', {
        amount,
        description
    });

    return response.data;
}
