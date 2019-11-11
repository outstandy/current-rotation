import styled from 'vue-styled-components';
import { colors, gradients, fonts } from './variables';

export const H1 = styled.h1`
  font-family: ${fonts.display};
  font-size: 6rem;
  line-height: 5.5rem;
  color: ${colors.white};
  margin: 0 0 1rem 0;
`;

export const H2 = styled.h2`
  font-family: ${fonts.display};
  font-size: 4rem;
  color: ${colors.white};
  margin: 0;
`;

export const H3 = styled.h3`
  font-family: ${fonts.mono};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${colors.gray};
  margin: 0;
`;

export const P = styled.p`
  font-family: ${fonts.mono};
  font-size: 1rem;
  color: ${colors.white};
  margin: 0;
  &.body {
    margin-bottom: 1rem;
  }
`;

export const Detail = styled.p`
  font-family: ${fonts.mono};
  font-size: 0.8rem;
  color: ${colors.gray};
  transition: all 0.2s ease;
  margin: 0;
  a {
    transition: all 0.2s ease;
    position: relative;
    &:after {
      content: '';
        position: absolute;
        bottom: 0;
        left: 0
        height: 1px;
        width: 0;
        background: ${gradients.indie};
        transition: all 0.2s ease;
        z-index: -1;
    }
    &:hover {
      &:after {
        width: 100%
      }
    }
  }
  &.body {
    margin-bottom: 1rem;
  }
`;

export const Link = styled.a`
  font-family: ${fonts.mono};
  font-size: 1rem;
  color: ${colors.white};
  margin: 0;
  transition: opacity 0.2s ease;
  transition: all 0.2s ease;
  &:hover {
  }
`;