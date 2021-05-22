<template>
 <li class="mr-4 hover:text-blue-01 duration-500 ease-linear font-medium 2xl:text-20 2xl:leading-7">
     <nuxt-link :to="item.link" :target="item.target">
         {{item.text}}
     </nuxt-link>
 </li>
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