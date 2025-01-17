import styled, { css } from 'styled-components/native';
import { ViewStyle } from 'react-native';

type BoxProps = ViewStyle;

const addPxIfNeeded = (key: string, value: any) => {
  const propsToAddPx = [
    'margin',
    'padding',
    'width',
    'height',
    'minHeight',
    'maxHeight',
    'top',
    'gap',
    'bottom',
    'left',
    'right',
    'borderTopWidth',
    'borderWidth',
    'paddingVertical',
    'paddingHorizontal',
    'borderBottomWidth',
    'borderRadius',
    'paddingTop'
  ];
  const shouldAddPx = propsToAddPx.some((prop) => key.startsWith(prop));
  return shouldAddPx && typeof value === 'number' ? `${value}px` : value;
};

export const Screen = styled.View<BoxProps>`
  ${(props: any) => css`
    ${Object.keys(props).map((key) => `${key}: ${addPxIfNeeded(key, props[key])};`)}
  `}
`;