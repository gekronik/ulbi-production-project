import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'frodo',
        first: 'rrr',
        currency: Currency.EUR,
        city: 'Moscow',
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
