import React from 'react';

import styled from 'styled-components';

// Types
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

// Styles
const Container = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px;
  color: #fff;
  width: 100%;
  background-color: #5001d0;
  font-weight: bold;
`;

export default Button;
