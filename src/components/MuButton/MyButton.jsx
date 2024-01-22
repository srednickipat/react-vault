import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";

const MyButton = ({ onClick, color, variant, disabled, children, ...rest }) => {
  return (
    <MuiButton
      onClick={onClick}
      color={color}
      variant={variant}
      disabled={disabled}
      data-testId={"my-button"}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

MyButton.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["inherit", "primary", "secondary"]),
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MyButton;
