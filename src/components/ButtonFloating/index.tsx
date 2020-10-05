import React from "react";
import styled from "@emotion/styled";
import * as colors from "../../styles/defaults";
import { FaPlus } from "react-icons/fa";

const StyledButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.secondaryColor};
  color: white;
  font-size: 1rem;
  position: fixed;
  bottom: 80px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonFloating = () => {
  return (
    <StyledButton>
      <FaPlus />
    </StyledButton>
  );
};

export default ButtonFloating;
