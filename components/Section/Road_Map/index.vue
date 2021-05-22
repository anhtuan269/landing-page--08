<template>
  <div class="road-map max-w-400 mx-auto mb-20 md:max-w-2xl">
      <h3 class=" text-20 font-bold leading-7 mb-10 md:text-24 md:leading-8">road map</h3>
     <div class="content grid grid-cols-2 md:grid-cols-3">
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='block'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='gaia'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='btc'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='support'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='token'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='June'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='2018'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='list'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='coin'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='key'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='muti'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='themes'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='trezor'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='app'" :type="item.type" />
      <Card v-for="(item,index) in card " :key="index" :item="item" v-show="item.type==='more'" :type="item.type" />    
      </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
    components: {
        Card
    },
    data() {
        return {
            card:[]
        }
    },
    async fetch() {
        return this.card = await fetch('http://localhost:3000/road').then((res) => {
            return res.json()
        })
    }
}
</script>

<style>

</style>