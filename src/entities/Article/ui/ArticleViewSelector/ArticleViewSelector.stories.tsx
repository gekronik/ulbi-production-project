import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'entities/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
