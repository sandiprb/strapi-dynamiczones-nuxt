const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `
    landingPageBySlug(slug: String): LandingPage!
  `,
  resolver: {
    Query: {
      landingPage: {
        description: "Return a single article",
      },
      landingPages: {
        description: "Return a list of landingPage",
      },
      landingPageBySlug: {
        description: "Return the landingPage by its slug",
        resolverOf: "application::landing-page.landing-page.findOne",
        resolver: async (_, { slug }) => {
          const entity = await strapi.services['landing-page'].findOne({
            slug,
          });
          if (entity) {
            return sanitizeEntity(entity, {
              model: strapi.models['landing-page'],
            });
          }
        },
      },
    },
  },
};
