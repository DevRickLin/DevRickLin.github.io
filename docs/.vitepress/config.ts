import { getDocs } from "../../src/utils/get_docs";
import { defineConfigWithTheme } from "vitepress";
import { IDocs } from "../../src/domain/IDocs";
import { IThemeConfig } from "../../src/domain/IThemeConfig";

function getSlide(docs:IDocs[]): IThemeConfig['sidebar'] {
    return [{
        text: "Pages",
        collapsible: true,
        items: docs.filter( doc => doc.frontMatter.page ).map( doc => ({ text: doc.frontMatter.title || "", link: doc.regularPath.replace("/docs","") || "" }))
    }, {
        text: 'Articles',
        collapsible: true,
        items: docs.filter( doc => doc.regularPath.includes("/articles/") ).map( doc => ({ text: doc.frontMatter.title || "", link: doc.regularPath.replace("/docs","") || "" }))
    }]
}

async function getConfig() {
    const docs = await getDocs();
    return defineConfigWithTheme<IThemeConfig>({
        title: "Rick's Home",
        description: "Welcome!",
        themeConfig: {
            sidebar: getSlide(docs),
            docs
        }
    })
}

export default getConfig(); 