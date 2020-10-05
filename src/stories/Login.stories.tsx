import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { storiesOf } from "@storybook/react";
import Screen from "../components/Login";

import { Provider } from "react-redux";
import store from "../stores";

storiesOf("Login form", module)
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add("empty form", () => <Screen />);

// export default {
//   title: "Example/Login",
//   component: Screen,
// } as Meta;

// const Template: Story = (args) => <Screen {...args} />;

// export const LoginEmpty = Template.bind({});
// LoginEmpty.args = {};
