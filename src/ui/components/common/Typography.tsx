import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';

const VARIANT = {
  h1: { fontWeight: styleToken.font.weightBold, fontSize: '32px' },
  h2: { fontWeight: styleToken.font.weightBold, fontSize: '28px' },
  h3: { fontWeight: styleToken.font.weightBold, fontSize: '24px' },
  h4: { fontWeight: styleToken.font.weightBold, fontSize: '20px' },
  subtitle1: { fontWeight: styleToken.font.weightMedium, fontSize: '20px' },
  subtitle2: { fontWeight: styleToken.font.weightMedium, fontSize: '18px' },
  subtitle3: { fontWeight: styleToken.font.weightMedium, fontSize: '16px' },
  subtitle4: { fontWeight: styleToken.font.weightMedium, fontSize: '14px' },
  body1: { fontWeight: styleToken.font.weightRegular, fontSize: '18px' },
  body2: { fontWeight: styleToken.font.weightRegular, fontSize: '16px' },
  body3: { fontWeight: styleToken.font.weightRegular, fontSize: '14px' },
  body4: { fontWeight: styleToken.font.weightRegular, fontSize: '12px' },
} as const;

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';

type TypographyProps = {
  variant: TypographyVariant;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
} & HTMLAttributes<HTMLElement>;

export function Typography({ children, ...props }: PropsWithChildren<TypographyProps>) {
  return <VariantTypography {...props}>{children}</VariantTypography>;
}

const Container = styled.span`
  color: ${styleToken.color.gray2};
  letter-spacing: -0.3px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

const VariantTypography = styled(Container)<TypographyProps>`
  ${(props) => VARIANT[props.variant]};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`};
`;
