import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: __API__,
    headers: { // требуется для получения каких либо данных авторизованным пользоветлямv
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '', // проверяется наличие самого заголовка, имитция авторизации
    },
});
