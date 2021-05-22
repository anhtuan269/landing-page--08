<template>
  <div class="icon w-6 relative" @click="mobile">
    <div class="icon-menu" :class="icon">
      <div
        class="mobile-icon group relative cursor-pointer duration-500 ease-linear"
      >
        <img
          src="@/static/image/menu.svg"
          alt=""
          class="w-6 group-hover:opacity-0 duration-300 ease-linear"
        />
        <img
          src="@/static/image/menu1.svg"
          alt=""
          class="w-6 absolute opacity-0 top-0 duration-300 ease-linear group-hover:opacity-100"
        />
      </div>
    </div>
    <div class="close-icon absolute top-0 duration-500 ease-linear" :class="menu">
      <div class="close group relative cursor-pointer duration-300 ease-linear">
        <img
          src="@/static/image/cancel.svg"
          alt=""
          class="w-6 group-hover:opacity-0 duration-300 ease-linear"
        />
        <img
          src="@/static/image/cancel1.svg"
          alt=""
          class="absolute opacity-0 top-0 duration-300 ease-linear group-hover:opacity-100"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    }
  },
  data() {
    return {
      mobile_fisrt:true
    };
  },
  methods: {
    mobile() {
      this.$emit('changed')
      return (this.mobile_fisrt = !this.mobile_fisrt);
    },
  },
  computed: {
    icon() {
      if (this.mobile_fisrt === true) {
        return " opacity-100  ";
      } else {
        return " opacity-0 ";
      }
    },
    menu() {
      if (this.mobile_fisrt === true) {
        return " opacity-0";
      } else {
        return " opacity-100"
      }
    },
  },
};
</script>

<style>
</style>