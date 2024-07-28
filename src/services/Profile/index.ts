import API from '../Api';
import { Profile } from './types';

export const index = async (): Promise<Profile> => {
    const { data: response } = await API.get('/profile');

    return response.data;
}
