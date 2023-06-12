import RButton, { Props } from './RButton.tsx';

// storybook story
export default {
  title: 'RButton',
  component: RButton,
  tags: ['buttons']
};

// template for story
export const Default = {
  args: {
    variant: 'default',
    size: 'medium',
    flat: false,
    block: false
  },
  render: (args: Props) => (<RButton {...args}>Default</RButton>)
};