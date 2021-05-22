<template>
  <div class="email">
      <h3 class="text-16 leading-6 mb-5 font-bold 2xl:text-22 2xl:leading-8">{{item.title}}</h3>
      <a class="text-16 leading-6 mb-3 hover:text-blue-01 duration-300 ease-linear transform hover:translate-x-2  text-gray-02 2xl:text-20 2xl:leading-7" :href="item.email"> {{item.email}}</a>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    }

}
</script>

<style>

</style>