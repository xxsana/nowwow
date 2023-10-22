const CONFIG = {
  // profile setting (required)
  profile: {
    name: "nowwow",
    image: "/profile.PNG", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "ios developer",
    bio: "",
    email: "sanajeong.dev@gmail.com",
    linkedin: "",
    github: "xxsana",
    instagram: "",
  },
  projects: [
    {
      name: `なう iOS`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "なう iOS",
    description: "",
    theme: "light",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app",
  seo: {
    keywords: ["Swift", "SwiftUI", "iOS",  "UIKit",  "スウィフト",  "iOSプログラミング",  "開発ブログ"],
  }, // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "xxsana/nowwow",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
