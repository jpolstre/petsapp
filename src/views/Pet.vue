<template>
  <div class="container">
    <div v-if="pet">
      <h1 class="text-4xl font-bold my-4 sm:my-6 capitalize">{{type}}</h1>
      <div class="antialiased font-medium text-lg mb-4">
        <!-- <div class="labels text-right font-bold mt-1">
          <div class="p-2 mb-2">Name:</div>
          <div class="p-2 mb-2">Breed:</div>
          <div class="p-2 mb-2">Gender:</div>
          <div class="p-2 mb-2">Age:</div>
          <div class="p-2 mb-2">Color:</div>
          <div class="p-2 mb-2">Weigth:</div>
          <div class="p-2 mb-2">Location:</div>
          <div class="p-2 mb-2">Notes:</div>
        </div>-->
        <form class="ml-2" @submit.prevent="saveData">
          <div class="flex text-right" v-for="(value, name) in pet" :key="name">
            <label for class="text-right font-bold mt-1 w-24 -ml-8 sm:-ml-10 capitalize">{{name}}:</label>
            <input
              type="text"
              class="ml-2 y-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-48 sm:w-64 border rounded p-1 sm:p-2 mb-2 focus:outline-none"
              v-model="pet[name]"
            />
          </div>
          <!-- <div class="flex text-right">
            <label for class="text-right font-bold mt-1 w-24 -ml-8 sm:-ml-10">Breed:</label>
            <input
              type="text"
              class="ml-2 border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-48 sm:w-64 border rounded p-1 sm:p-2 mb-2 focus:outline-none"
              v-model="pet.breed"
            />
          </div>
          <div class="flex text-right">
            <label for class="text-right font-bold mt-1 w-24 -ml-8 sm:-ml-10">Gender:</label>
            <input
              type="text"
              class="ml-2 border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-48 sm:w-64 border rounded p-1 sm:p-2 mb-2 focus:outline-none"
              v-model="pet.gender"
            />
          </div>
          <div class="flex text-right">
            <label for class="text-right font-bold mt-1 w-24 -ml-8 sm:-ml-10">Age:</label>
            <input
              type="text"
              class="ml-2 border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-48 sm:w-64 border rounded p-1 sm:p-2 mb-2 focus:outline-none"
              v-model="pet.age"
            />
          </div>
          <div class="flex text-right">
            <label for class="text-right font-bold mt-1 w-24 -ml-8 sm:-ml-10">Color:</label>
            <input
              type="text"
              class="ml-2 border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-48 sm:w-64 border rounded p-1 sm:p-2 mb-2 focus:outline-none"
              v-model="pet.color"
            />
          </div>
          <div class="flex text-right">
            <label for class="text-right font-bold mt-1 w-24 -ml-8 sm:-ml-10">Weigth:</label>
            <input
              type="text"
              class="ml-2 border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-48 sm:w-64 border rounded p-1 sm:p-2 mb-2 focus:outline-none"
              v-model="pet.weigth"
            />
          </div>
          <div class="flex text-right">
            <label for class="text-right font-bold mt-1 w-24 -ml-8 sm:-ml-10">Location:</label>
            <input
              type="text"
              class="ml-2 border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-48 sm:w-64 border rounded p-1 sm:p-2 mb-2 focus:outline-none"
              v-model="pet.location"
            />
          </div>
          <div class="flex text-right">
            <label for class="text-right font-bold mt-1 w-24 -ml-8 sm:-ml-10">Notes:</label>
            <input
              type="text"
              class="ml-2 border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-48 sm:w-64 border rounded p-1 sm:p-2 mb-2 focus:outline-none"
              v-model="pet.notes"
            />
          </div>-->
          <div class="actions mt-4 text-base font-normal">
            <a href="#" @click.prevent="deleteItem" class="mr-2">Delete</a>&#183;
            <button type="submit" class="mr-2">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>  
<script>
import { mapState, mapActions } from "vuex";

const DefaultPet = {
  name: "",
  breed: "",
  gender: "",
  age: 0,
  color: "",
  weigth: 0,
  location: "",
  notes: ""
};
export default {
  data() {
    return {
      pet: { ...DefaultPet },
      type: null
    };
  },
  mounted() {
    const { type, option, id } = this.$route.params;

    this.type = type;

    if (option === "edit") {
      this.pet = this[type][id];
    }

    // if (type !== "cats" || type !== "dogs" || this[type][id] === undefined) {
    //   this.$router.go(-1);
    // } else {
    //   this.pet = this[type][id];
    // }
  },
  computed: {
    ...mapState(["cats", "dogs"])
  },
  methods: {
    ...mapActions(["savePet", "deletePet"]),
    saveData() {
      const errors = [];
      const pet = { ...this.pet }; //copia asi hay que acostumbrarce.

      // validate form
      for (let field in pet) {
        if (pet[field] === "" || pet.filed === 0) {
          errors.push(`${field}, required\n`);
        }
      }
      if (errors.length > 0) {
        alert(errors.join(""));
        return;
      }

      // if valid  save data form.

      const { type, option, id } = this.$route.params;

      const payload = {
        type,
        option,
        id,
        pet
      };

      this.savePet(payload);

      // after save clean form data or back to the table.

      if (option === "edit") {
        this.$router.push("/" + type);
      } else if (option === "create") {
        this.pet = { ...this.pet, ...DefaultPet };
      }
    },
    deleteItem() {
      const { id, type } = this.$route.params;
      if (confirm("Are sure dete this "+type+": "+this.pet.name)) {
        const payload = {
          id,
          type
        };
        this.deletePet(payload);
        this.$router.go(-1);
      }
    }
  }
};
</script>