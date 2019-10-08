<template>
  <div id="app" class="font-maven antialiased text-gray-800">
    <!-- <div
      class="bg-cover bg-center h-64"
      :style="`background-image: url(${require('@/assets/bg1.jpg')})`"
    >hola</div>-->

    <div class="flex text-white p-4 bg-primary-700">
      <nav class="flex justify-between items-center container">
        <div>
          <router-link to="/" class="flex">
            <img src="@/assets/dog.svg" alt="pet" />
            <span class="font-bold text-xl ml-2 mt-2">PetsApp</span>
          </router-link>
        </div>
        <div class="font-medium hidden lg:block">
          <router-link class="hover:text-gray-100" to="/">Inicio &#124;&nbsp;</router-link>
          <router-link class="hover:text-gray-100" to="/dogs">Dogs &#124;&nbsp;</router-link>

          <router-link class="hover:text-gray-100" to="/cats">Cats </router-link>
        </div>
        <div class="block lg:hidden noselect" @click="drawer=!drawer">
          <!-- <svg
            class="fill-current text-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>-->
          <btn-hamburger :active="drawer" />
        </div>
      </nav>
    </div>
    <div
      :class="{'drawer-show':drawer===true, 'drawer-hide':drawer===false}"
      class="menu block border-b solid border-primary-700 lg:hidden bg-white text-primary-700 w-full h-64 absolute top-10 right-0 flex flex-col justify-center items-center text-center font-semibold text-lg z-10"
      @click="drawer=false"
    >
      <router-link
        class="hover:text-gray-100 hover:bg-primary-300 hover:text-white py-4 w-1/2 rounded"
        to="/"
      >Home</router-link>
      <router-link
        class="hover:text-gray-100 hover:bg-primary-300 hover:text-white py-4 w-1/2 rounded"
        to="/cats"
      >Cats</router-link>
      <router-link
        class="hover:text-gray-100 hover:bg-primary-300 hover:text-white py-4 w-1/2 rounded"
        to="/dogs"
      >Dogs</router-link>
 
    </div>

    <div @click="drawer=false">
      <router-view />
    </div>
  </div>
</template>
<script>
import BtnHamburger from "@/components/BtnHamburger";
export default {
  components: {
    BtnHamburger
  },
  created() {
    window.addEventListener("keydown", e => {
      const key = event.key || event.keyCode;
      if (key === "Escape" || key === "Esc" || key === 27) this.drawer = false;
    });
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style src="@/assets/main.css" />
<style scoped>
.drawer-hide {
  height: 0;
  /*transition: visibility 0s, opacity 0.5s linear;*/
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
}
.drawer-hide a {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s linear;
}

.drawer-show {
  height: 300px;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  /*transition: visibility 0.6s, opacity 0.6s linear;*/
}
.drawer-show a {
  visibility: visible;
  opacity: 1;
  transition: visibility 1s, opacity 1s linear;
}
</style>
