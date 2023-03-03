<template>
  <section class="dogs">
    <div class="container">
      <h2 class="my-4 sm:my-6 text-4xl font-semibold">Dogs</h2>
      <table-cmp :items="dogs" :type="`dogs`" />
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
    ...mapState(["dogs"])
  }
};
</script>
