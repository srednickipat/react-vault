import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const MyTypography = ({ variant, color, align, children }) => {
  return (
    <Typography variant={variant} color={color} align={align}>
      {children}
    </Typography>
  );
};

MyTypography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "srOnly",
  ]),
  color: PropTypes.oneOf([
    "initial",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary",
  ]),
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  children: PropTypes.node.isRequired,
};

export default MyTypography;
