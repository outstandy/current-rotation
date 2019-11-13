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
  text-decoration: 1px underline ${colors.black};
  text-decorationx-skip-ink: auto;
  transition: text-decoration 0.2s ease-in-out
  &:hover {
    text-decoration: 1px underline ${colors.white};
  }
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

export const TextInput = styled.input`
  position: relative;
  font-size: 1rem;
  font-family: ${fonts.mono};
  border: 0;
  border-bottom: 1px solid ${colors.gray};
  padding: 0.5rem 0;
  display: block;
  outline: none;
  box-shadow: none;
  width: 100%;
  margin-right: 1rem;
  background-color: ${colors.black};
  transition: all 0.2s ease-in-out;
  color: ${colors.gray};
  margin-bottom: 1rem;
  &:focus {
    color: ${colors.white};
    border-bottom: 1px solid ${colors.white};
  }
`;

export const TextArea = styled.textarea`
  position: relative;
  font-size: 1rem;
  font-family: ${fonts.mono};
  border: 0;
  border-bottom: 1px solid ${colors.gray};
  padding: 0.5rem 0;
  display: block;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  box-shadow: none;
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.gray};
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  &:focus {
    color: ${colors.white};
    border-bottom: 1px solid ${colors.white};
  }
`;

export const Select = styled.select`
  font-size: 1rem;
  font-family: ${fonts.mono};
  border: 0;
  border-bottom: 1px solid ${colors.gray};
  padding: 0.5rem 0;
  display: block;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  box-shadow: none;
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.gray};
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  &:focus {
    color: ${colors.white};
    border-bottom: 1px solid ${colors.white};
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  background: ${gradients.indie};
  padding: 0.5rem 1rem;
  border: 0;
  font-family: ${fonts.mono};
  color: ${colors.white};
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 8px rgba(51,251,155,0.5);
  }
`;
