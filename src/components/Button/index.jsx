import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "./styles";
import circular from "../../images/loading.gif";
export default function ButtonCustom({
  label,
  variant = "primary",
  top,
  action,
  type,
  loading = false,
}) {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isPrimary = variant === "primary";
  return (
    <Button
      isPrimary={isPrimary}
      isPortrait={isPortrait}
      onClick={action}
      top={top}
      type={type}
    >
      {loading ? (
        <span>
          <img src={circular} alt="loading" width={30} />
        </span>
      ) : (
        label
      )}
    </Button>
  );
}
