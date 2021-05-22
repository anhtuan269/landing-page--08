<template>
  <div class="hero max-w-400 mx-auto mb-20 md:max-w-2xl xl:max-w-1110 xl:flex xl:justify-between xl:items-center acer:max-w-1200 2xl:max-w-1360 3xl:max-w-1760">
    <div class="content mb-20">
      <Heading
        v-for="(head, index) in heading"
        :key="index"
        :head="head"
        :type="head.type"
        v-show="head.type === 'hero'"
      />
      <Button
        v-for="(item, index) in button"
        :key="index"
        :item="item"
        :type="item.type"
        v-show="item.type === 'hero'"
      />
    </div>
    <img src="@/static/image/hero.png" alt=""  class="w-full 2xl:w-2/4"/>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import Button from "@/components/Button";
export default {
  components: {
    Heading,
    Button,
  },
  data() {
    return {
      heading: [],
      button: [],
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.button = await fetch("http://localhost:3000/button").then((res) => {
      return res.json();
    });
  },
};
</script>

<style>
</style>