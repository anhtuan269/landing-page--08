<template>
  <div class="header max-w-400 mx-auto pt-10 mb-20 md:max-w-2xl md:flex md:justify-between xl:max-w-1200 acer:max-w-1280 2xl:max-w-1460 3xl:max-w-1860">
    <div class="left flex items-center justify-between md:justify-start">
      <Logo
        v-for="(item, index) in logo"
        :key="index"
        :item="item"
        class="w-2/3 md:w-40 2xl:w-330 "
      />
      <div class="menu">
        <ul class="md:flex">
          <Menu
            class="hidden md:block"
            v-for="(item, index) in menu"
            :key="index"
            :item="item"
          />
        </ul>
        <Mobile @changed="changed" class="md:hidden" />

        <div
          class="fixed top-0 right-0 h-screen w-200 border border-black bg-black text-white p-4 transform duration-300 ease-linear"
          :class="display"
        >
          <ul class="relative">
            <li class="flex justify-end">
              <img
                src="@/static/image/cancel.svg"
                alt=""
                class="z-20 bg-white rounded-full border-black border-2 w-8"
                @click="changed"
              />
            </li>
            <MenuMobile
              v-for="(item, index) in menu"
              :key="index"
              :item="item"
            />
            <MenuMobile
              v-for="(item, index) in menu"
              :key="index"
              :item="item"
            />
            <MenuMobile
              v-for="(item, index) in menu"
              :key="index"
              :item="item"
            />
            <MenuMobile
              v-for="(item, index) in menu"
              :key="index"
              :item="item"
            />
          </ul>
        </div>
      </div>
    </div>
    <ul class=" hidden md:flex items-center">
      <Social v-for="(item, index) in icon" :key="index" :item="item" />
    </ul>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import MenuMobile from "@/components/MenuMobile";
import Social from "@/components/Social";
import Mobile from "@/components/Mobile";
export default {
  components: {
    Logo,
    Menu,
    MenuMobile,
    Social,
    Mobile,
  },
  data() {
    return {
      logo: [],
      menu: [],
      icon: [],
      mobile_menu: false,
    };
  },
  async fetch() {
    this.logo = await fetch("http://localhost:3000/logo").then((res) => {
      return res.json();
    });
    this.menu = await fetch("http://localhost:3000/menu").then((res) => {
      return res.json();
    });
    this.icon = await fetch("http://localhost:3000/social").then((res) => {
      return res.json();
    });
  },
  methods: {
    changed() {
      return (this.mobile_menu = !this.mobile_menu);
    },
  },
  computed: {
    display() {
      console.log(this.mobile_menu);
      if (this.mobile_menu === true) {
        return " opacity-100";
      } else {
        return "opacity-0 translate-x-full ";
      }
    },
  },
};
</script>

<style>
</style>