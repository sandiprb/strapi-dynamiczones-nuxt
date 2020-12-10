<template>
  <div class="bg-indigo-50">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl"
      >
        {{$props.title}}
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a
            :href="$props.CTALink"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {{$props.CTAText}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "CTAText", "CTALink"]
};
</script>
