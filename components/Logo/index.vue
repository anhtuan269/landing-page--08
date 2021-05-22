<template>
  <div class="logo">
    <nuxt-link :to="item.link">
          <img :src="item.url" alt="" class="w-2/3 2xl:w-3/4">
    </nuxt-link>
  </div>
</template>

<script>
export default {
    props :{
        item: {
            type:Object
        }
    }
}
</script>

<style>

</style>