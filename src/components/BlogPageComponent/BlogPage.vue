<script setup lang="ts">
  import BlogHeader from '@/components/BlogPageComponent/BlogHeader.vue'
  import BlogCard from '@/components/BlogPageComponent/BlogCard.vue'
  import Category from '@/components/HomePageComponent/Category.vue'
</script>

<template>
  <BlogHeader />
  <div className="w-[1282px] h-24 relative ml-[130px] mt-[50px]">
    <div className="w-[1282px] h-[0px] left-0 top-[96px] absolute opacity-30 border border-[#6d6e75]"></div>
    <div className="left-0 top-0 absolute text-gray-800 text-5xl font-bold leading-[64px]">All posts</div>
  </div>
  <BlogCard/>
  <div class="text-gray-800 text-4xl font-bold leading-[48px] ml-[130px] mt-[100px]">All Categories</div>
  <Category class="ml-[130px]"/>
  <div class="w-[414px] h-64 relative ml-[550px] mt-[100px] mb-[120px]">
    <div
    class="w-[414px] left-0 top-0 absolute text-center text-[#232536] text-[30px] font-bold leading-[48px]">
    Join our team to be a part of our story
  </div>
    <div
    class="w-[405px] left-[5px] top-[112px] absolute text-center text-gray-500 text-[19px] font-normal font-['Inter'] leading-7">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
  </div>
    <button
      class="h-14 px-12 py-4 left-[120px] top-[200px] absolute bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out justify-start items-start gap-3 inline-flex">
      <a class="text-white text-lg font-bold leading-normal">Join Now</a>
    </button>
  </div>
</template>
