import React, { RefObject } from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  width: 240px;
  background-color: #f6f4f4;
  border: 1px solid #ddd;
  border-radius: 2px;
  line-height: 2rem;
  color: #666;
  margin-bottom: 5px;
`;

type Props = {
  className: string;
  name: string;
  placeholder: string;
  ref:any
};

const InputAsText: React.FC<Props> = ({
  className,
  name,
  placeholder,
  ref,
  ...rest
}) => {
  return (
    <StyledInput
      className={className}
      name={name}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  );
};

export default InputAsText;
