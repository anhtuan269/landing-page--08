<template>
  <div class="button text-center xl:text-left ">
      <button class="bg-blue-01 text-white duration-500 ease-linear hover:text-blue-01 hover:bg-white focus:outline-none "
      :class="border"
      >{{item.text}}</button>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            type:Object
        },
        type: {
            typr:String
        }
    },
    computed: {
        border() {
            if(this.type==='hero') {
                return ' py-2 px-12 font-medium rounded-full border border-blue-01 2xl:py-4 2xl:px-20 '
            }
        }
    }
}
</script>

<style>

</style>