<template>
     <li class="block mb-2 hover:text-blue-01 duration-300 ease-linear">
         <nuxt-link to="/">
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