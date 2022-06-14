import React from 'react';
import BaseContentContainer from '.';
import Constants from '../../commons/constants';
import PageTemplate from '../../pages/PageTemplate';

export default {
  title: 'Components/BaseContentContainer',
  component: BaseContentContainer,
  argTypes: {
    opacityType: {
      control: { type: 'radio' },
      options: [
        Constants.Opacity.OpacityVisible,
        Constants.Opacity.OpacityTransparent,
      ],
    },
  },
};

export function Default(args) {
  return <BaseContentContainer {...args} />;
}

export function Template(args) {
  return (
    <PageTemplate>
      <BaseContentContainer {...args}>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
      </BaseContentContainer>
    </PageTemplate>
  );
}
