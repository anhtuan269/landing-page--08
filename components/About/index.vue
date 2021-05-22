<template>
  <div class="about ">   
      <h3 class="text-16 leading-6 mb-5 font-bold 2xl:text-22 2xl:leading-8">{{item.title}}</h3>
      <ul>

     <li class="text-16 leading-6 mb-3 hover:text-blue-01 duration-300 ease-linear transform hover:translate-x-2  text-gray-02 2xl:text-20 2xl:leading-7">  <nuxt-link to="/" >{{item.item}}</nuxt-link> </li>
     <li  class="text-16 leading-6 mb-3 hover:text-blue-01 duration-300 ease-linear transform hover:translate-x-2  text-gray-02 2xl:text-20 2xl:leading-7"> <nuxt-link to="/" >{{item.item_2}}</nuxt-link> </li>
     <li  class="text-16 leading-6 mb-3 hover:text-blue-01 duration-300 ease-linear transform hover:translate-x-2  text-gray-02 2xl:text-20 2xl:leading-7"> <nuxt-link to="/" >{{item.item_3}}</nuxt-link> </li>
      </ul>
      
  </div>
</template>

<script>
export default {
  props: {
    item:{
      type:Object
    }
  }

}
</script>

<style>

</style>