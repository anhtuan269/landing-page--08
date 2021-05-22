<template>
  <div class="newsletter md:w-250 xl:w-full">
      <h3 class="text-16 leading-6 mb-5 font-bold 2xl:text-22 2xl:leading-8">{{item.title}}</h3>
      <p class="text-16 text-gray-02 leading-5 mb-5 2xl:text-20 2xl:leading-7">{{item.description}}</p>
      <div class="input-form relative">
          <input type="text" :placeholder="item.place_holder" class="w-full border border-black rounded-lg px-10 py-2 focus:outline-none md:px-4  xl:px-8 2xl:text-20 2xl:leading-7">
          <button class="px-8 py-2 bg-blue-01 border-blue-01 border rounded-tr-lg rounded-br-lg text-white font-medium absolute top-0 right-0 focus:outline-none hover:bg-green-01 hover:border-green-01 duration-300 ease-linear md:px-2  xl:px-8 2xl:text-20 2xl:leading-7 2xl:px-10 ">{{item.button}}</button>
      </div>
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