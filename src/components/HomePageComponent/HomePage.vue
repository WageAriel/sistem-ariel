<script setup lang="ts">
import HomeHero from '@/components/HomePageComponent/HomeHero.vue'
import FeaturePost from '@/components/HomePageComponent/FeaturePost.vue'
import AboutUs from '@/components/HomePageComponent/AboutUs.vue'
import Category from '@/components/HomePageComponent/Category.vue'
import SpecialPost from '@/components/HomePageComponent/SpecialPost.vue'
import ListAuthor from '@/components/HomePageComponent/ListAuthor.vue'
import Testimoni from '@/components/HomePageComponent/Testimoni.vue'
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <HomeHero/>
  <FeaturePost/>
  <AboutUs/>
  <div class="flex flex-col mt-[120px] ml-[120px] w-[1280px] relative">
    <div class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
      Choose A Catagory
    </div>
  </div>
  <Category/>
  <SpecialPost/>
  <ListAuthor/>
  <Testimoni/>
</template>
