import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({ page: 3 });
    });
    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
