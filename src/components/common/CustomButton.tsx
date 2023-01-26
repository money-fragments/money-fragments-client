import styled, { DefaultTheme } from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  padding?: number | string;
  borderRadius?: number | string;
  children?: string;
  theme: DefaultTheme;
}

export const CustomButton = styled.button<ButtonProps>`
  border: 0.5px solid gray;

  background: ${(props) =>
    props.backgroundColor
      ? (props: any) => props.theme.colors[`${props.backgroundColor}`]
      : (props) => props.theme.colors.white30};

  color: ${(props) =>
    props.color
      ? (props) => props.color
      : (props) => props.theme.colors.black100};

  width: ${(props) => props.width || '60px'};
  height: ${(props) => props.height || '30px'};

  font-size: ${(props) =>
    props.fontSize
      ? (props: any) => props.theme.fontSize[`${props.fontSize}`]
      : (props) => props.theme.fontSize.content};

  border-radius: ${(props) => props.borderRadius || '15px'};

  &:disabled {
    color: ${(props) =>
      props.color
        ? (props) => props.color
        : (props) => props.theme.colors.black100};
    background: ${(props) =>
      props.backgroundColor
        ? (props: any) => props.theme.colors[`${props.backgroundColor}`]
        : (props) => props.theme.colors.white30};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
