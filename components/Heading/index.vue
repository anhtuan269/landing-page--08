<template>
  <div class="heading">
    <h3 :class="title">
      {{ head.title }}
    </h3>
    <img :src="head.url" alt=""  class="md:w-full"
    :class="image"
    />
    <p :class="description">
      {{ head.description }}
      <span class="text-black-01 font-medium leading-l-30">{{ head.span }}</span>
      {{ head.sub_des }}
    </p>
    <img :src="head.url_2" alt="" 
    :class="exchange"
    />
  </div>
</template>

<script>
export default {
  props: {
    head: {
      type: Object,
    },
    type: {
      type: String,
    },
  },
  computed: {
    title() {
      if (this.type === "hero") {
        return "text-36 font-bold leading-l-50 mb-5 2xl:text-52 2xl:w-700 2xl:leading-l-60";
      } else if(this.type==='dappy') {
        return " text-20 font-bold leading-7 mb-10 md:text-24 md:leading-8 xl:mb-0 2xl:text-36 2xl:leading-l-60";
      } else {
        return 'text-20 font-bold leading-7 mb-10 md:text-24 md:leading-8 2xl:text-36 2xl:leading-l-60 '
      }
    },
    description() {
      if (this.type === "hero") {
        return "text-16 text-gray-02 font-light leading-l-27 mb-5 w-250 2xl:text-24 2xl:leading-8 2xl:w-10/12";
      } else {
        return "text-16 text-gray-02 font-light leading-l-27 2xl:text-24 2xl:leading-8";
      }
    },
    image() {
       if (this.type === "hero") {
        return "";
      } else if(this.type==='exchange') {
        return "";
      } else if(this.type==='dappy') {
        return "";
      } else {
        return 'mb-10'
      }
    },
    exchange() {
      if(this.type==='exchange') {
        return 'mt-10 md:w-full'
      } else {
        return ''
      }
    }
  },
};
</script>

<style>
</style>