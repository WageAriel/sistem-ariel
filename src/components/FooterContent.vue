<script setup lang="ts">

</script>

<template>
  <div class="z-10 relative  flex overflow-hidden flex-col justify-center px-20 py-14 bg-gray-800 max-md:px-5">
    <div
      class="flex flex-wrap gap-5 justify-between items-start w-full text-base leading-7 text-white max-md:max-w-full">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/d32ba014fd2f43b69edb017a43e6b422/5863b7cafbe1366bc851c2316ac207aaa8cfc0b1654b5f382fb96bf6382fe0a5?apiKey=d32ba014fd2f43b69edb017a43e6b422&"
        class="object-contain shrink-0 max-w-full aspect-[5] w-[140px]" />
      <div class="flex gap-6">
        <router-link to="/" class="grow">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/aboutUs">About us</router-link>
        <router-link to="/contact">Contact us</router-link>
        <router-link to="/privacy">Privacy Policy</router-link>
      </div>
    </div>
    <div class="px-16 py-20 mt-14 w-full bg-gray-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div class="text-4xl font-bold tracking-tighter leading-10 text-white max-md:mt-10 max-md:max-w-full">
            Subscribe to our news letter to get latest updates and news
          </div>
        </div>
        <div class="flex flex-col ml-5 w-6/12 h-14 max-md:ml-0 max-md:w-full">
          <div class="flex flex-wrap gap-6 mt-1 w-full max-md:mt-10 max-md:max-w-full">
            <input
              class="grow px-6 py-6 h-14 text-base leading-loose border border-solid border-neutral-600 bg-gray-700 text-gray-500 w-fit max-md:px-5"
              placeholder="Enter Your Email">
            </input>
            <button
              class="gap-3 px-12 py-4 text-lg font-bold leading-none text-white whitespace-nowrap bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out max-md:px-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap gap-5 justify-between mt-12 text-base leading-7 text-white max-md:mt-10 max-md:max-w-full">
      <div class="opacity-70">Finstreet 118 2561 Fintown</div>
      <div class="w-28 h-4 ml-[1250px] absolute justify-center items-start gap-4 inline-flex">
        <button class="w-4 h-4 relative flex-col justify-start items-start flex">
          <img src="../assets/images/sosial media/FacebookPutih.png">
        </button>
        <button class="w-4 h-4 relative flex-col justify-start items-start flex">
          <img src="../assets/images/sosial media/TwitterPutih.png">
        </button>
        <button class="w-4 h-4 relative flex-col justify-start items-start flex">
          <img src="../assets/images/sosial media/InstagramPutih.png">
        </button>
        <button class="w-4 h-4 relative flex-col justify-start items-start flex">
          <img src="../assets/images/sosial media/LinkedPutih.png">
        </button>
      </div>
    </div>
    <div class="self-start text-base leading-7 text-white opacity-70">
      Hello@finsweet.com 020 7993 2905
    </div>
  </div>
</template>
