import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>( // 1 раз диспатч отрабатывает
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data; // 3 раз диспатч отрабатывает
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
