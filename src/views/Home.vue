<template>
  <div class="home">
    <div class="hero bg-gray-200">
      <div class="container flex flex-col lg:flex-row">
        <div class="mt-10">
          <h1
            class="text-gray-900 text-4xl font-semibold w-full lg:w-4/5 mb-2 leading-tight capitalize"
          >No compres uno de raza, adopta a uno sin casa.</h1>
          <div class="leading w-full lg:w-3/4 text-lg mb-4">Gracias por ayudarlos</div>
          <button class="py-3 px-4 bg-primary-700 text-white rounded hover:bg-pink-600">Adopta Ahora</button>
          <!-- <button
            class="ml-2 py-3 px-4 border border-primary-700 bg-white text-primary-700 rounded hover:bg-pink-600 hover:text-white"
          >Add Pet</button>-->

          <div class="inline-block relative">
            <menu-simple
              label="Add Pet"
              :options="[{label:'Dog', route:'/dogs/create'}, {label:'Cat', route:'/cats/create'}]"
            />
            <div
              class="absolute top-0 right-0 border border-primary-700 bg-white text-primary-700 rounded-full px-3 py-1 -mt-3 -mr-2 text-xs"
            >{{totalPets}}</div>
          </div>
        </div>
        <div class="mt-10">
          <img src="@/assets/pet.svg" alt="pet" />
        </div>
      </div>
    </div>
    <section class="dogs mt-10">
      <div class="container">
        <h1 class="text-3xl font-semibold">Dogos</h1>
        <p
          class="subpixel-antialiased"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima esse deserunt maiores beatae repellendus expedita iusto eos? Corrupti excepturi deleniti nostrum, harum consequatur eligendi incidunt delectus, tempora fugit, quo magni.</p>
      </div>
    </section>
  </div>
</template>
<script>
import MenuSimple from "@/components/MenuSimple";
// mapGetters and mapState van en computed
import { mapGetters } from "vuex";

export default {
  components: {
    MenuSimple
  },
  computed: {
    ...mapGetters(["totalPets"])
  }
};
</script>
<style scoped>
.hero {
  letter-spacing: 0px;
}
</style>


