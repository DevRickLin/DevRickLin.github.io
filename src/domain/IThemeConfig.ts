import { IDocs } from "./IDocs";
import { DefaultTheme } from "vitepress";

interface IThemeConfig extends DefaultTheme.Config {
    docs: IDocs[]
}

export { IThemeConfig }