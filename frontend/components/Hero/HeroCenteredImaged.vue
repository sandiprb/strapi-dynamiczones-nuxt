<template>
  <div>
    <div class="relative pt-6 pb-16 sm:pb-24">
      <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            v-html="$props.title"
          >
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            {{$props.description}}
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 flex flex-col" aria-hidden="true">
        <div class="flex-1"></div>
        <div class="flex-1 w-full bg-gray-800"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <img class="relative rounded-lg shadow-lg"
        :src="`http://localhost:1337${$props.image.url}`" alt="App screenshot"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // content is query data from parent page
  // title is the page title of parent page
  props: ["title", "description", "image"]
};
</script>
