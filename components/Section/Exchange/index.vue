<template>
  <div class="exchange mx-auto max-w-400 mb-20 md:max-w-2xl">
    <Heading
      v-for="(head, index) in heading"
      :key="index"
      :head="head"
      :type="head.type"
      v-show="head.type==='exchange'"
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