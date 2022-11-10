import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PersonIcon } from '@radix-ui/react-icons'
import { Input } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputPrimary = Template.bind({});
export const InputWithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

InputPrimary.args = {
  placeholder: 'Jonh Doe',
  label: 'Name',
  type: 'text',
  inputId: 'name'
};

InputWithIcon.args = {
 placeholder: 'Jonh Doe',
 icon: <PersonIcon />,
 label: 'Name',
 type: 'text',
 inputId: 'name'
};