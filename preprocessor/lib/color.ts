import betterColor, { round } from "better-color-tools";

const modColor = (
  color: string,
  dL: number = 0,
  dC: number = 0,
  dH: number = 0
) => {
  const [l, c, h] = betterColor.from(color).oklchVal;

  const newL = dL + l;
  const newC = dC + c;
  const newH = dH + h;

  const newColor = `oklch(${newL * 100}% ${newC} ${newH})`;

  return betterColor.from(newColor).hex;
};

const setColor = (
  color: string,
  dL: number = 0,
  dC: number = 0,
  dH: number = 0
) => {
  const [l, c, h] = betterColor.from(color).oklchVal;

  const newL = dL || l;
  const newC = dC || c;
  const newH = dH || h;

  const newColor = `oklch(${newL * 100}% ${newC} ${newH})`;

  return betterColor.from(newColor).hex;
};

const palette = (color: string) => {
  const isLight = betterColor.lightOrDark(color) === "light";

  return {
    lit: modColor(color, 0.05),
    main: modColor(color),
    dim: modColor(color, -0.05),
    border: modColor(color, -0.15),
    font: isLight ? setColor(color, 0.03) : setColor(color, 0.97),
  };
};

const p = palette("#2146C7");

const html =
  Object.entries(p)
    .map(
      ([key, val]) =>
        `<div style="background-color: ${val}; color: ${
          val === p.font ? p.main : p.font
        }">${key}</div>`
    )
    .join("\n") + `<br>`;

console.log(html);

console.log(
  Object.entries(p)
    .map(([key, val]) => `--color-primary-${key}: ${val};`)
    .join("\n")
);
