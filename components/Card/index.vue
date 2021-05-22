<template>
  <div class="road-map-card mb-5 relative">
    <div
      class="bg-gray-01 w-9/12 left-5 absolute top-2 z-a rounded-full md:w-at-03"
      :class="background"
    ></div>
    <div class="content z-10">
      <img :src="item.url" alt="" class="z-10" />
      <img
        :src="item.bg"
        alt=""
        class="absolute top-n-3 left-2/4 z-10 transform"
      />
      <p class="time text-12 leading-4 my-2 h-5 2xl:text-18 2xl:leading-6">
        {{ item.day }}
      </p>
      <div class="text-gray-02">
        <p class="2xl:text-20 2xl:leading-7 ">{{ item.item_1 }}</p>
        <p class="2xl:text-20 2xl:leading-7 ">{{ item.item_2 }}</p>
        <p class="2xl:text-20 2xl:leading-7 ">{{ item.item_3 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    type: {
      type: String,
    },
  },
  computed: {
    background() {
      if (this.type === "more") {
        return "h-0";
      } else if (this.type === "btc") {
        return "h-0.5 md:h-0";
      } else if (this.type === "June") {
        return "h-0.5 md:h-0";
      } else if (this.type === "coin") {
        return "h-0.5 md:h-0";
      } else if (this.type === "themes") {
        return "h-0.5 md:h-0";
      } else {
        return "h-0.5";
      }
    },
  },
};
</script>

<style>
</style>