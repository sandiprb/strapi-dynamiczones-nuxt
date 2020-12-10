<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-gray-50 overflow-hidden">
    <div
      class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
      aria-hidden="true"
    >
      <div class="relative h-full max-w-7xl mx-auto">
        <svg
          class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </svg>
      </div>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <nav
          class="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div
            class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
          >
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  id="main-menu"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open main menu</span>
                  <!-- Heroicon name: menu -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:space-x-10">
            <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
              >Product</a
            >

            <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
              >Features</a
            >

            <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
              >Marketplace</a
            >

            <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
              >Company</a
            >
          </div>
          <div
            class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
          >
            <span class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
              >
                Log in
              </a>
            </span>
          </div>
        </nav>
      </div>

      <!-- Components -->
      <div v-if="content">
        <div v-for="comp in content.components" :key="comp.id" class="project">
          <HeroCenteredImaged
            v-if="comp.__typename === 'ComponentHeroHeroCenteredImaged'"
            :title="comp.title"
            :description="comp.description"
            :image="comp.image"
          />
          <ContactCentered
            v-if="comp.__typename === 'ComponentContactContactCentered'"
            :title="comp.title"
            :description="comp.description"
          />
          <CTACentered
            v-if="comp.__typename === 'ComponentCtaCtaCentered'"
            :title="comp.title"
            :description="comp.description"
            :CTAText="comp.CTAText"
            :CTALink="comp.CTALink"
          />
          <CTAJustifiedSingle
            v-if="comp.__typename === 'ComponentCtaCtaJustifiedSingle'"
            :title="comp.title"
            :CTAText="comp.CTAText"
            :CTALink="comp.CTALink"
          />
          <HeroCentered
            v-if="comp.__typename === 'ComponentHeroHeroCentered'"
            :title="comp.title"
            :description="comp.description"
            :primaryCtaText="comp.primaryCtaText"
            :primaryCTALink="comp.primaryCTALink"
            :secondaryCTAText="comp.secondaryCTAText"
            :secondaryCTALink="comp.secondaryCTALink"
          />
          <LeadFormStacked
            v-if="comp.__typename === 'ComponentLeadLeadFormStacked'"
            :title="comp.title"
            :description="comp.description"
            :CTAText="comp.CTAText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import query from "@/graphql/queries/LandingPage.gql";
export default {
  name: "LandingPage",
  async asyncData({ $content, params }) {
    const { slug } = params;
    console.log(params)
    return {
      slug
    };
  },

  head() {
    if (!this.content) return;
    const {
      title,
      metaDescription: description,
      keywords,
      image
    } = this.content.seo;
    const imageUrl = `http://localhost:1337${image.url}`;
    const meta = [
      { hid: "description", name: "description", content: description },
      /* OpenGraph */
      { hid: "og:title", property: "og:title", content: title },
      {
        hid: "og:description",
        property: "og:description",
        content: description
      },
      { hid: "og:image", property: "og:image", content: imageUrl },
      /* twitter */
      {
        name: "twitter:card",
        content: "summary_large_image"
      },

      {
        name: "twitter:title",
        content: title
      },
      {
        name: "twitter:description",
        content: description
      },
      {
        name: "twitter:image",
        content: imageUrl
      },
      { name: "keywords", content: keywords }
    ];
    return {
      meta,
      title
    };
  },
  apollo: {
    content: {
      prefetch: true,
      query: query,
      variables() {
        return {
          slug: 'demo-page'
        };
      },
      update(data) {
        return data.landingPageBySlug;
      },
      error(error) {
        console.error(JSON.parse(error));
      }
    }
  },
  data() {
    return {
      content: null
    };
  }
};
</script>
