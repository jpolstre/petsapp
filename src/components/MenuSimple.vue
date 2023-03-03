<template>
  <div class="ml-2 inline-block relative group container-menu hover:text-gray-200">
    <div class="flex py-3 px-4 border border-primary-700 bg-white text-primary-700 rounded hover:bg-pink-600 hover:text-white">
      <span class="font-bold">{{label}}</span>
      <svg
        class="fill-current m-1 h-4 w-4 font-bold"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
    <div
      class="items-center absolute border border-t-0 rounded-b-lg p-1 w-full bg-white p-2 hidden menu"
    >
      <div v-for="(option, index) in options" :key="index">
        <router-link
          v-if="option.route"
          :to="option.route"
          class="px-4 py-2 block text-black hover:bg-gray-200"
        >{{option.label}}</router-link>

        <a
          v-if="option.action"
          @click.prevent="option.action"
          href="#"
          class="px-4 py-2 block text-black hover:bg-gray-200"
        >Logout</a>
      </div>

      <!-- <hr class="border-t mx-2 border-gray-200" /> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["label", "options"]
};
</script>
<style scoped>
.container-menu:hover .menu {
  display: block;
}
</style>
