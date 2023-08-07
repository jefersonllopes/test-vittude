import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  ContainerInput,
  Input,
  Label,
  MessageError,
  ShowPassword,
} from "./styles";
import visible from "../../images/visible.png";
import hide from "../../images/hide.png";
export default function InputCustom({
  label,
  error,
  name,
  register,
  placeholder,
  type = "text",
  setError = () => {},
  ...rest
}) {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const { onChange, ...params } = register(name);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ContainerInput isPortrait={isPortrait}>
      <Label>{label}</Label>
      <div>
        <Input
          isPortrait={isPortrait}
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          name={name}
          {...rest}
          {...params}
          onChange={(event) => {
            onChange(event);
            setError() && setError();
          }}
        />
        {type === "password" && (
          <ShowPassword
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            src={showPassword ? hide : visible}
          />
        )}
      </div>
      {error && <MessageError>{error}</MessageError>}
    </ContainerInput>
  );
}
