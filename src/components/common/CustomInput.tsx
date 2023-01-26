import styled, { DefaultTheme } from 'styled-components';

interface InputProps {
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

export const CustomInput = styled.input<InputProps>`
  border: 0.5px solid gray;
  padding: 0px 10px;
  background: ${(props) =>
    props.backgroundColor
      ? (props: any) => props.theme.colors[`${props.backgroundColor}`]
      : (props) => props.theme.colors.white60};

  color: ${(props) =>
    props.color
      ? (props) => props.color
      : (props) => props.theme.colors.black100};

  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '40px'};

  font-size: ${(props) =>
    props.fontSize
      ? (props: any) => props.theme.fontSize[`${props.fontSize}`]
      : (props) => props.theme.fontSize.content};
  border-radius: ${(props) => props.borderRadius || '5px'};
`;
