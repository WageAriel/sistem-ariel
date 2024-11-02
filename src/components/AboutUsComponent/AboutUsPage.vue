<template>
  <AboutUsHeader/>
  <Mission/>
  <OurTeam/>
  <Started/>
  <ListAbout/>
  <div class="w-[414px] h-64 relative ml-[550px] mt-[100px] mb-[120px]">
    <div class="w-[414px] left-0 top-0 absolute text-center text-[#232536] text-[30px] font-bold leading-[48px]">
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

<script setup lang="ts">
  import AboutUsHeader from '@/components/AboutUsComponent/AboutUsHeader.vue'
  import Mission from '@/components/AboutUsComponent/Mission.vue'
  import OurTeam from '@/components/AboutUsComponent/OurTeam.vue'
  import Started from '@/components/AboutUsComponent/Started.vue'
  import ListAbout from '@/components/AboutUsComponent/ListAbout.vue'

  import {
    onMounted
  } from 'vue';

  onMounted(() => {
    window.scrollTo(0, 0);
  });
</script>