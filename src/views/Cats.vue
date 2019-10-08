<template>
  <section class="cats">
    <div class="container">
      <h2 class="my-4 sm:my-6 text-4xl font-semibold">Cats</h2>
      <table-cmp :items="cats" :type="`cats`" />
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
import TableCmp from "@/components/TableCmp";
export default {
  components: {
    TableCmp
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["cats"]) //es como:
    // ,cats(){
    //   return this.$store.state.cats
    // }
  }
};
</script>
