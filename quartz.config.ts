import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "notatallVishal.",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Urbanist",
        body: "Urbanist",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#d7b19d",
          lightgray: "#d7b19d",
          gray: "#402217",
          darkgray: "#402217",
          dark: "#402217",
          secondary: "#865439", 
          tertiary: "#ae6745",
          highlight: "rgba(199, 141, 90, 0.15)",
          textHighlight: "#ae674588",
        }, 
        darkMode: { 
		  /*light: "#000000",
          lightgray: "#23131e",
          gray: "#3c1c34",
          darkgray: "#6f3462",
          dark: "#e1aecf",
          secondary: "#e1aecf",
          tertiary: "#e1aecf",
          highlight: "rgba(225, 174, 207, 0.15)",
          textHighlight: "#e1aecf88",*/
          light: "#12122c",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#c3cbff",
          dark: "#9cbccc",
          secondary: "#a0d1ce",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288", 
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
