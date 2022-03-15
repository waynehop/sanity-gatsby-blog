export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6230b7204d977319730d0e5e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uht8o53w",
                  apiId: "a084153c-baad-4a51-b591-085d13a8747c",
                },
                {
                  buildHookId: "6230b720a45ff720e6a1669b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-cmgutbjz",
                  apiId: "0146bb75-bbfc-47ab-aeea-897756718531",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/waynehop/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-cmgutbjz.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
