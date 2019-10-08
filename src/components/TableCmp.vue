<template>
  <div class="overflow-x-auto text-base sm:text-lg">
    <table class="w-full text-left antialiased" v-if="items.length">
      <thead>
        <tr class="uppercase border-b border-gray-200">
          <th class="p-3">name</th>
          <th class="p-3">breed</th>
          <th class="p-3">gender</th>
          <th class="p-3">age</th>
          <th class="p-3">color</th>
          <th class="p-3">weigth</th>
          <th class="p-3">location</th>
          <th class="p-3">notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" :class="{'bg-primary-100':index%2===1}">
          <td class="p-3">
            <router-link :to="`/${type}/edit/${index}`">{{item.name}}</router-link>
          </td>
          <td class="p-3">{{item.breed}}</td>
          <td class="p-3">{{item.gender}}</td>
          <td class="p-3">{{item.age}}</td>
          <td class="p-3">{{item.color}}</td>
          <td class="p-3">{{item.weigth}}</td>
          <td class="p-3">{{item.location}}</td>
          <td class="p-3">{{item.notes}}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="text-center">
      <h3 class="text-xl font-medium">..Sorry not yet items in this section!</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "type"]
};
</script>