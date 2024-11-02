<template>
    <AuthorHeader />
    <div class="w-[1024px] h-[832px] ml-[255px] mt-[100px] relative">
        <div class="left-0 top-0 absolute text-[#232536] text-5xl font-bold font-['Sen'] leading-[64px]">My Posts</div>
        <div class="w-[1024px] h-80 left-0 top-[128px] absolute">
            <div class="w-[580px] h-52 left-[444px] top-[56px] absolute">
                <div
                    class="w-[170.44px] left-0 top-0 absolute text-[#ffd050] text-base font-semibold font-['Inter'] uppercase leading-tight tracking-[3px]">
                    BUSINESS</div>
                <div
                    class="w-[580px] left-0 top-[152px] absolute text-[#6d6e75] text-base font-normal font-['Inter'] leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</div>
                <div
                    class="w-[560.38px] left-0 top-[40px] absolute text-[#232536] text-4xl font-bold font-['Sen'] leading-[48px]">
                    Font sizes in UI design: The complete guide to follow</div>
            </div>
            <img class="w-[412px] h-80 left-0 top-0 absolute" src="@/assets/images/1.png" />
        </div>
        <div class="w-[1024px] h-80 left-0 top-[512px] absolute">
            <div class="w-[580px] h-52 left-[444px] top-[56px] absolute">
                <div
                    class="w-[170.44px] left-0 top-0 absolute text-[#ffd050] text-base font-semibold font-['Inter'] uppercase leading-tight tracking-[3px]">
                    ECONOMY</div>
                <div
                    class="w-[580px] left-0 top-[152px] absolute text-[#6d6e75] text-base font-normal font-['Inter'] leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</div>
                <div
                    class="w-[560.38px] left-0 top-[40px] absolute text-[#232536] text-4xl font-bold font-['Sen'] leading-[48px]">
                    How to build rapport with your web design clients</div>
            </div>
            <img class="w-[412px] h-80 left-0 top-0 absolute" src="@/assets/images/2.png" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import AuthorHeader from '@/components/AuthorComponent/AuthorHeader.vue'

    import {
        onMounted
    } from 'vue';

    onMounted(() => {
        window.scrollTo(0, 0);
    });
</script>