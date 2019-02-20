import React from 'react';
import { iconAdd, iconAddSolid, iconAddOutline } from '@wfp/icons';
import iconsList from '@wfp/icons';
import { storiesOf } from '@storybook/react';

import { withKnobs, select, text } from '@storybook/addon-knobs';
import Icon, { setIconsList } from '../Icon';
import IconSkeleton from '../Icon/Icon.Skeleton';

setIconsList(iconsList);

const icons = {
  'Add (iconAdd from `@wfp/icons`)': 'iconAdd',
  'Add with filled circle (iconAddSolid from `@wfp/icons`)': 'iconAddSolid',
  'Add with circle (iconAddOutline from `@wfp/icons`)': 'iconAddOutline',
};

const iconMap = {
  iconAdd,
  iconAddSolid,
  iconAddOutline,
};

const props = () => {
  const selectedIcon = select('The icon (icon (regular))', icons, 'iconAdd');
  return {
    style: {
      margin: '50px',
    },
    icon: iconMap[selectedIcon],
    role: text('ARIA role (role)', ''),
    fill: text('The SVG `fill` attribute (fill)', 'grey'),
    fillRule: text('The SVG `fillRule` attribute (fillRule)', ''),
    width: text('The SVG `width` attribute (width)', ''),
    height: text('The SVG `height` attribute (height)', ''),
    description: text(
      'The a11y text (description)',
      'This is a description of the icon and what it does in context'
    ),
    iconTitle: text('The content in <title> in SVG (iconTitle)', ''),
    className: 'extra-class',
  };
};

const propsSkeleton = {
  style: {
    margin: '50px',
  },
};

const propsSkeleton2 = {
  style: {
    margin: '50px',
    width: '24px',
    height: '24px',
  },
};

storiesOf('Icon', module)
  .addParameters({
    info: {
      source: false,
      inline: true,
    },
  })
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div>
      <Icon {...props()} />
    </div>
  ))
  .add('Skeleton', () => (
    <div>
      <IconSkeleton {...propsSkeleton} />
      <IconSkeleton {...propsSkeleton2} />
    </div>
  ));
