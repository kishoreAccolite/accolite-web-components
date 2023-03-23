import { html, TemplateResult } from 'lit';
import '../src/accolite-button.js';

export default {
  title: 'Button',
  component: 'bark-button',
  argTypes: {
    fill: { 
        options: ['soild', 'outlined', 'flat'],
        control: { type: 'select' } 
    },
    label: { control: 'text' },
    isDisabled: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label: string;
  fill: string;
  isDisabled: boolean;
}

const Template: Story<ArgTypes> = ({
    label,
    fill,
    isDisabled,
}: ArgTypes) => html`
  <bark-button fill=${fill} label=${label} isDisabled=${isDisabled}></bark-button>
`;


export const Default = Template.bind({});
Default.args = {
  fill: 'soild',
  label: 'Button',
  isDisabled: false,
};