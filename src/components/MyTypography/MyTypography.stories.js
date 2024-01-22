import MyTypography from "./MyTypography";

export default {
  title: "Example/MyTypography",
  component: MyTypography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Heading1 = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const Heading2 = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const Heading3 = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const Body = {
  args: {
    variant: "body",
    children: "Body",
  },
};

export const Custom = {
  args: {
    variant: "h3",
    color: "secondary",
    align: "center",
    children: "Custom Styled Text",
  },
};
