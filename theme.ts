import { buildLegacyTheme } from "sanity";

const props = {
  "--white": "#fff",
  "--dark": "#131825",
  primary: "#373F41",
  secondary: "#3C64B1",
  tertiary: "#F4F3EE",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  "--black": props["--dark"],
  "--white": props["--white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["tertiary"],
  "--component-text-color": props["--dark"],

  "--default-button-color": props["primary"],
  "--default-button-primary-color": props["primary"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["primary"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--dark"],
  "--main-navigation-color--inverted": props["--white"],

  "--focus-color": props["primary"],
});
