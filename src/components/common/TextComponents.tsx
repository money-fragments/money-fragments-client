import styled from 'styled-components';

interface TextProps {
  fontColor?: string;
}

export const Title = styled.span<TextProps>`
  color: ${(props) =>
    props.fontColor
      ? (props) => props.fontColor
      : (props) => props.theme.colors.black100};
  font-size: ${(props) => props.theme.fontSize.title};
  line-height: ${(props) => props.theme.lineHeight.title};
`;

export const H1 = styled.span<TextProps>`
  color: ${(props) =>
    props.fontColor
      ? (props) => props.fontColor
      : (props) => props.theme.colors.black100};
  font-size: ${(props) => props.theme.fontSize.h1};
  line-height: ${(props) => props.theme.lineHeight.h1};
`;

export const H2 = styled.span<TextProps>`
  color: ${(props) =>
    props.fontColor
      ? (props) => props.fontColor
      : (props) => props.theme.colors.black100};
  font-size: ${(props) => props.theme.fontSize.h2};
  line-height: ${(props) => props.theme.lineHeight.h2};
`;

export const H3 = styled.span<TextProps>`
  color: ${(props) =>
    props.fontColor
      ? (props) => props.fontColor
      : (props) => props.theme.colors.black100};
  font-size: ${(props) => props.theme.fontSize.h3};
  line-height: ${(props) => props.theme.lineHeight.h3};
`;

export const H4 = styled.span<TextProps>`
  color: ${(props) =>
    props.fontColor
      ? (props) => props.fontColor
      : (props) => props.theme.colors.black100};
  font-size: ${(props) => props.theme.fontSize.h4};
  line-height: ${(props) => props.theme.lineHeight.h4};
`;

export const H5 = styled.span<TextProps>`
  color: ${(props) =>
    props.fontColor
      ? (props) => props.fontColor
      : (props) => props.theme.colors.black100};
  font-size: ${(props) => props.theme.fontSize.h5};
  line-height: ${(props) => props.theme.lineHeight.h5};
`;

export const H6 = styled.span<TextProps>`
  color: ${(props) =>
    props.fontColor
      ? (props) => props.fontColor
      : (props) => props.theme.colors.black100};
  font-size: ${(props) => props.theme.fontSize.h6};
  line-height: ${(props) => props.theme.lineHeight.h6};
`;

export const Content = styled.span<TextProps>`
  color: ${(props) =>
    props.fontColor
      ? (props) => props.fontColor
      : (props) => props.theme.colors.black100};
  font-size: ${(props) => props.theme.fontSize.content};
  line-height: ${(props) => props.theme.lineHeight.content};
`;
