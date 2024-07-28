import API from '../Api';
import { Deposit } from './types';

export const list = async (): Promise<Deposit[]> => {
    const { data: response } = await API.get('/deposit');

    return response.data.data;
}

export const deposit = async ({ amount, image }: Deposit): Promise<Deposit> => {
    const formData = new FormData();
    formData.append('amount', amount.toString());

    const file = image instanceof FileList ? image[0] : image;
    formData.append('image', file);

    const response = await API.post('deposit', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return response.data;
}
