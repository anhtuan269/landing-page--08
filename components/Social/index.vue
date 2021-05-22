<template>
          <li class="mr-3 cursor-pointer acer:mr-7 ">
              <nuxt-link :to="item.link" >
                  <img :src="item.url" :alt="item.alt" class="2xl:w-8">
              </nuxt-link>
          </li>
</template>

<script>
export default {
    props: {
        item:{
            type: Object
        }
    }

}
</script>

<style>

</style>