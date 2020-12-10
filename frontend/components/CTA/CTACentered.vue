<template>
  <div class="bg-indigo-700">
    <div
      class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        {{ $props.title }}
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">
        {{ $props.description }}
      </p>
      <a
        :href="$props.CTALink"
        class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
      >
        {{ $props.CTAText }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "CTAText", "CTALink"]
};
</script>
