<template>
  <div class="footer max-w-400 mx-auto pb-20 md:max-w-2xl xl:max-w-1110 acer:max-w-1200 2xl:max-w-1360 3xl:max-w-1760">
    <div class="content mb-10 md:flex md:justify-between">
      <div class="left flex justify-between mb-10  md:justify-start xl:justify-between xl:w-6/12 acer:w-640 2xl:w-700 3xl:w-6/12">
        <About v-for="(item, index) in about" :key="index" :item="item" />
        <div class="contact md:ml-10 xl:ml-0">
          <Contact v-for="(item, index) in contact" :key="index" :item="item" />
         <div class="social mt-5 md:mt-10">
             <ul class=" grid grid-cols-3 gap-4 xl:grid-cols-6  xl:gap-0 ">
                  <Social v-for="(item, index) in social" :key="index" :item="item" />
             </ul>
         </div>
        </div>
      </div>
      <div class="right text-center md:text-left">
        <News v-for="(item, index) in news" :key="index" :item="item" />
      </div>
    </div>
    <Copy v-for="(item, index) in copy" :key="index" :item="item" />
  </div>
</template>

<script>
import About from "@/components/About";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import News from "@/components/News";
import Copy from "@/components/Copy";
export default {
  components: {
    About,
    Contact,
    News,
    Copy,
    Social,
  },
  data() {
    return {
      about: [],
      contact: [],
      news: [],
      copy: [],
      social: [],
    };
  },
  async fetch() {
    this.about = await fetch("http://localhost:3000/about").then((res) => {
      return res.json();
    });
    this.contact = await fetch("http://localhost:3000/contact").then((res) => {
      return res.json();
    });
    this.news = await fetch("http://localhost:3000/news").then((res) => {
      return res.json();
    });
    this.copy = await fetch("http://localhost:3000/copy").then((res) => {
      return res.json();
    });
    this.social = await fetch("http://localhost:3000/social").then((res) => {
      return res.json();
    });
  },
};
</script>

<style>
</style>