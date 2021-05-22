<template>
  <div id="landing-08">
    <Header />
    <Hero />
    <div class="xl:flex  xl:justify-between  xl:max-w-1110 mx-auto  acer:max-w-1200 2xl:max-w-1360 3xl:max-w-1760">
      <div class="left xl:w-525 acer:w-555 2xl:w-640 3xl:w-850">
        <Dappy />
        <Source />
        <Road />
      </div>
     <div class="right xl:w-525 acer:w-555 2xl:w-670 3xl:w-850">
        <Current />
      <Token />
      <Exchange />
     </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Section/Header";
import Hero from "@/components/Section/Hero";
import Dappy from "@/components/Section/Dappy";
import Source from "@/components/Section/Source";
import Road from "@/components/Section/Road_Map";
import Current from "@/components/Section/Current";
import Token from "@/components/Section/Token";
import Exchange from "@/components/Section/Exchange";
import Footer from "@/components/Section/Footer";
export default {
  components: {
    Header,
    Hero,
    Dappy,
    Source,
    Road,
    Current,
    Token,
    Exchange,
    Footer,
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
