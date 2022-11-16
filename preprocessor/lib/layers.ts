import { colorFn } from "better-color-tools";

type Props = { [key: string]: string | Props };

const getByPath = (obj: Props, path: string[]) => {};

const CSS_KEY = Symbol("CSS");

const createProps = <T extends Props>(
  scope: string,
  props: T
): T & { [CSS_KEY]: Map<string, string> } => {
  const css: Map<string, string> = new Map();

  const recur = (props: Props, path: string[] = []): Props => {
    const entries = [];

    for (const [key, val] of Object.entries(props)) {
      const partialPath = [...path, key];
      if (typeof val === "string") {
        const propName = `var(--${partialPath.join("-")})`;
        entries.push([key, propName]);
        css.set(propName, val);
      } else {
        entries.push([key, recur(val, partialPath)]);
      }
    }

    return Object.fromEntries(entries);
  };

  const names = recur(props) as T;

  return Object.assign(names, { [CSS_KEY]: css });
};

const props = createProps(":root", {
  gap: {
    xs: "0.25rem",
    s: "0.5rem",
    m: "1rem",
  },
  colors: {
    base: {
      main: "#FF2222",
      lit: "#FF0000",
      dim: "#FF5555",
      border: "#FF9999",
      contrast: "#FFFFFF",
    },
    primary: {
      main: "#FF2222",
      lit: "#FF0000",
      dim: "#FF5555",
      border: "#FF9999",
      font: "#FFFFFF",
    },
    secondary: {
      main: "#FF2222",
      lit: "#FF0000",
      dim: "#FF5555",
      border: "#FF9999",
      font: "#FFFFFF",
    },
  },
  font: {
    sans: "sans-serif",
  },
});

console.log(props);

const style = {
  title: "Main navigation headers",
  selector: "body > nav > h1, body > nav > h2",
  layer: "framework",
  rules: {
    backgroundColor: props.colors.base.lit,
    color: props.colors.base.contrast,
    fontFamily: props.font.sans,
  },
};

console.log(style);
