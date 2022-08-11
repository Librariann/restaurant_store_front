import React from "react";
import styled from "styled-components";

type Props = {
  type: React.HTMLInputTypeAttribute;
  className?: React.HTMLInputTypeAttribute;
  placeholder?: React.HTMLInputTypeAttribute;
  autoComplete?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  value?: React.HTMLInputTypeAttribute;
  accept?: string;
};

const InputStyle = styled.input`
  display: block;
  padding-top: 3px;
  padding-bottom: 5px;
  padding-right: 75px;
  padding-left: 12px;
  background-color: #dcedc8;
  font-weight: 200;
  font-size: 16px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #898989;
    font-size: 16px;
  }
  :-ms-input-placeholder {
    color: #898989;
    font-size: 16px;
  }
`;

function Input({
  type,
  className,
  placeholder,
  autoComplete,
  onChange,
  onKeyUp,
  onKeyDown,
  value,
  accept,
}: Props) {
  return (
    <InputStyle
      type={type}
      className={className}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      value={value}
      accept={accept}
    />
  );
}

export default Input;
