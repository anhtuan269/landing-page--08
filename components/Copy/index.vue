<template>
  <div class="copy-right md:text-center xl:text-right xl:mr-9 2xl:mr-20">
      <p class="2xl:text-20 2xl:leading-7">
          {{item.design}}
          <nuxt-link class="text-black-01 font-semibold leading-5 text-16" :to="item.link_auth">{{item.auth}}</nuxt-link>
          {{item.dev}}
          <nuxt-link class="text-black-01 font-semibold leading-5 text-16 " :to="item.link_dev">{{item.by}}</nuxt-link>

      </p>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            type:Object
        }
    }

}
</script>

<style>

</style>