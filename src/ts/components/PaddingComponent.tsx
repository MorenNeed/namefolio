import React, { ReactNode } from 'react';
import { PaddingWrapper } from './Padding.styles';
import RoundedTextElement from '../elements/RoundedTextElement';

export default class PaddingComponent extends React.Component {
  render() : ReactNode {
    return (
      <PaddingWrapper>
        <RoundedTextElement/>
      </PaddingWrapper>
    );
  }
}
