import React, {ReactNode} from 'react';
import {Text, TextProps} from 'react-native';
import {fontCreator} from '../../utils/theme/font.ts';

interface TextAdditionalProps {
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p1'
    | 'p2'
    | 'p3'
    | 'p4'
    | 'p5'
    | 'p6'
    | 'p7'
    | 'p8'
    | 'p9'
    | 'p10'
    | 'i1'
    | 'i2'
    | 'i3'
    | 'i4';
  numeric?: boolean;
  children: ReactNode;
}

const Index: React.FC<TextProps & TextAdditionalProps> = props => {
  const {type, children} = props;

  return (
    <Text {...props} style={[fontCreator(type), props.style]}>
      {children}
    </Text>
  );
};

export default Index;
