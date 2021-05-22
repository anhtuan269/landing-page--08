<template>
  <div class="Source max-w-400 mx-auto mb-20 md:max-w-2xl">
    <Heading
      v-for="(head, index) in heading"
      :key="index"
      :head="head"
      :type="head.type"
      v-show="head.type==='source'"

    />
  </div>
</template>

<script>
import Heading from "@/components/Heading";
export default {
  components: {
    Heading,
  },
  data() {
    return {
      heading: [],
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
  },
};
</script>
<style>
</style>