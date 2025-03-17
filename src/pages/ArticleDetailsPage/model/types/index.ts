import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comment: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsRecommendationsSchema
}
