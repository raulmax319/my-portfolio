import styled from 'styled-components';

export const MyButton = styled('a')<{ primary: boolean }>`
  display: inline-block;
  cursor: pointer;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  color: ${({ primary }) => (primary ? '#fff' : '#212529')};
  background: ${({ primary }) =>
    primary
      ? 'linear-gradient(45deg, #63aeff, #007bff)'
      : 'linear-gradient(45deg, #f1f2f3, #fff)'};
  vertical-align: middle;
  user-select: none;
  border: 1px solid ${({ primary }) => (primary ? '#007bff' : '#f1f2f3')};
  border-radius: 30px;
  line-height: 1.5rem;
  padding: 10px 30px;
  transition: background 350ms ease-in-out;

  &:hover {
    background: ${({ primary }) =>
      primary
        ? 'linear-gradient(45deg, #212529, black)'
        : 'linear-gradient(45deg, #c1c2c3, #fff)'};
    border-color: ${({ primary }) => (primary ? '#212529' : '#f1f2f3')};
  }
`;
