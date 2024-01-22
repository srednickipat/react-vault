import MyButton from "./MyButton";

export default {
  title: "Example/MyButton",
  component: MyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    color: "primary",
    children: "Button",
  },
};

export const Secondary = {
  args: {
    color: "secondary",
    children: "Button",
  },
};
