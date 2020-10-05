import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Screen from '../components/SplashScreen';

export default {
    title: 'Example/SplashScreen',
    component: Screen,
  } as Meta;

const Template: Story = args => <Screen {...args} />;

export const SplashScreen = Template.bind({});
SplashScreen.args = {}