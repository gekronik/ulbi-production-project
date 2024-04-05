import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton height={16} width={150} className={cls.username} />
                        <Skeleton height={16} width={150} className={cls.date} />
                    </div>
                    <Skeleton height={24} width={250} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton height={200} width={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton height={16} width={130} />
                </div>
                <Skeleton height={16} width={150} className={cls.title} />
            </Card>
        </div>
    );
});
