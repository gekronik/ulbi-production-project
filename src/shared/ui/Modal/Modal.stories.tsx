import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { OutlineDark } from 'shared/ui/Button/Button.stories';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Autem dolores eaque eveniet harum, molestiae necessitatibus qui.
               Error facere odio quaerat.`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Autem dolores eaque eveniet harum, molestiae necessitatibus qui.
               Error facere odio quaerat.`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
