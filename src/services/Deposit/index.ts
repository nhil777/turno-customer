import API from '../Api';
import { Deposit } from './types';

export const list = async (): Promise<Deposit[]> => {
    const { data: response } = await API.get('/deposit');

    return response.data.data;
}

export const deposit = async ({ amount, image }: Deposit): Promise<Deposit> => {
    const response = await API.post('deposit', {
        amount,
        image,
    });

    return response.data;
}
