import { FontFamily, defaultFont } from "../document/fonts";
import { loadOpenTypeFont } from "../utils/fonts";

type IFontType = "subtitle" | "title";
type IFontOptions = {
  size: number;
  weight: number;
  family?: FontFamily;
};

type IText = {
  x: number | ((textWidth: number) => number);
  y: number;
  option: IFontType | IFontOptions;
  children: string | number | undefined;
};

const onHandFonts = {
  title: {
    size: 22,
    weight: 700,
  },
  subtitle: {
    size: 16,
    weight: 500,
  },
};

export const Text: React.FC<IText> = ({ x, y, option, children }) => {
  if (!children) return <></>;
  const defaultFontFamily = defaultFont;

  const font = typeof option === "string" ? onHandFonts[option] : option;
  const optionFontFamily =
    typeof option === "string"
      ? defaultFontFamily
      : option.family || defaultFontFamily;
  const openTypeFont = loadOpenTypeFont(optionFontFamily, font.weight);

  if (typeof x === "function")
    x = x(openTypeFont.getAdvanceWidth(children.toString(), font.size));

  const path = openTypeFont.getPath(children.toString(), x, y, font.size);
  const pathSVG = path.toPathData(1);

  const classNames = ["text"];
  if (typeof option === "string") classNames.push(option);
  return <path className={classNames.join(" ")} d={pathSVG} />;
};
