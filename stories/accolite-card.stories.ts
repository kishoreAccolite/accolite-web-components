import { html, TemplateResult } from 'lit';
import '../src/accolite-card.js';

export default {
    title: 'Card',
    component: 'accolite-card',
    argTypes: {
        fill: {
            options: ['soild', 'outlined', 'neutral'],
            control: { type: 'radio' }
        },
        cardTitle: { control: 'text' },
        actionLabel: { control: 'text' },
        imageHeight: { control: 'number' },
        imageSrc: { control: 'text' },
        minHeight: { control: 'number' },
        titleSize: {
            options: ['xs', 's', 'm', 'l', 'xl'],
            control: { type: 'radio' }
        }
    },
};

interface Story<T> {
    (args: T): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

interface ArgTypes {
    cardTitle: string;
    fill: string;
    titleSize: string;
    children: string;
    actionLabel: string;
    imageSrc: string;
    minHeight: number;
    imageHeight: number;
}

const Template: Story<ArgTypes> = ({
    cardTitle,
    fill,
    titleSize,
    children,
    minHeight,
    actionLabel,
    imageSrc,
    imageHeight,
}: ArgTypes) => html`
  <accolite-card fill=${fill} cardTitle=${cardTitle} titleSize=${titleSize} imageSrc=${imageSrc} actionLabel=${actionLabel} minHeight=${minHeight} imageHeight=${imageHeight}>${children}</accolite-card>
`;


export const Default = Template.bind({});

Default.args = {
    fill: 'soild',
    cardTitle: 'Card Title',
    titleSize: 's',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante mi, dapibus at est non, mollis mattis elit. Phasellus vehicula elit lacus, in posuere orci rhoncus sit.',
    actionLabel: 'Read more',
    minHeight: 0,
    imageSrc: 'https://www.accolite.com/assets/jpg/homebannerimages/accolite-logo.svg',
    imageHeight: 150
};