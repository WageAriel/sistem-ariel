<template>
    <div class="w-[768px] mt-[100px] ml-[380px] h-44 relative">
        <div
            class="left-[317px] top-0 absolute text-center text-[#232536] text-base font-black font-['Inter'] uppercase leading-tight tracking-[3px]">
            Contact us</div>
        <div
            class="w-[557px] left-[105px] top-[32px] absolute text-center text-[#232536] text-[42px] font-bold font-['Sen']">
            Let’s Start a Conversation</div>
        <div
            class="w-[768px] left-0 top-[120px] absolute text-center text-[#6d6e75] text-base font-normal font-['Inter'] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim.</div>
    </div>

    <div class="w-[768px] h-60 relative mt-[80px] ml-[380px]">
        <div class="w-[768px] h-60 left-0 top-0 absolute bg-[#ffd050]"></div>
        <div class="w-[294.35px] h-[138px] left-[400px] top-[48px] absolute">
            <div
                class="w-[76.70px] left-[0.35px] top-0 absolute opacity-60 text-[#4c4c4c] text-sm font-normal font-['Inter'] leading-tight">
                Contact Us</div>
            <div
                class="w-[193px] left-0 top-[52px] absolute text-[#4c4c4c] text-xl font-bold font-['Sen'] leading-loose">
                020 7993 2905</div>
            <div
                class="w-[156.46px] left-[0.35px] top-[84px] absolute opacity-60 text-[#4c4c4c] text-base font-normal font-['Inter'] leading-7">
                hello@finsweet.com</div>
            <div
                class="w-[294px] h-[0px] left-[0.35px] top-[36px] absolute opacity-10 bg-[#4c4c4c] border border-[#4c4c4c]">
            </div>
            <div class="w-[88.97px] h-2.5 left-[0.35px] top-[128px] absolute opacity-80"></div>
        </div>
        <div class="w-[294px] h-36 left-[64px] top-[48px] absolute">
            <div
                class="left-0 top-0 absolute opacity-60 text-[#4c4c4c] text-sm font-normal font-['Inter'] leading-tight">
                Working hours</div>
            <div
                class="w-[223px] left-0 top-[52px] absolute text-[#4c4c4c] text-xl font-bold font-['Sen'] leading-loose">
                Monday To Friday</div>
            <div
                class="w-[237px] left-0 top-[84px] absolute text-[#4c4c4c] text-xl font-bold font-['Sen'] leading-loose">
                9:00 AM to 8:00 PM </div>
            <div class="w-[294px] h-[0px] left-0 top-[36px] absolute opacity-10 bg-[#4c4c4c] border border-[#4c4c4c]">
            </div>
            <div
                class="left-0 top-[116px] absolute opacity-60 text-[#4c4c4c] text-base font-normal font-['Inter'] leading-7">
                Our Support Team is available 24/7</div>
        </div>
    </div>

    <form class="w-[768px] mt-[40px] ml-[380px] mb-[150px] space-y-4">
        <div class="h-[76px] p-6 rounded-sm border border-[#6d6e75]/50 flex items-center">
            <input id="fullName" type="text" class="ml-4 w-full border-none focus:outline-none"
                placeholder="Full name" />
        </div>
        <div class="h-[76px] p-6 rounded-sm border border-[#6d6e75]/50 flex items-center">
            <input id="email" type="email" class="ml-4 w-full border-none focus:outline-none" placeholder="Email" />
        </div>
        <div class="h-[76px] flex gap-4">
            <div class="grow shrink basis-0 h-[76px] p-6 border border-[#6d6e75]/50 flex justify-between items-center">
                <label for="provinsi"
                    class="text-[#232536] text-base font-normal ml-[20px] font-['Inter'] leading-7">Provinsi</label>
                <select id="provinsi" class="ml-4 border-none focus:outline-none">
                    <option value="" selected disabled></option>
                    <option value="jakarta">Jakarta</option>
                    <option value="jawa-barat">Jawa Barat</option>
                    <option value="jawa-tengah">Jawa Tengah</option>
                </select>
            </div>
            <div class="grow shrink basis-0 h-[76px] p-6 border border-[#6d6e75]/50 flex justify-between items-center">
                <label for="kota" class="text-[#232536] text-base font-normal font-['Inter'] leading-7">Kota</label>
                <select id="kota" class="ml-4 border-none focus:outline-none">
                    <option value="" selected disabled></option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="semarang">Semarang</option>
                </select>
            </div>
        </div>
        <div class="h-36 p-6 rounded-sm border border-[#6d6e75]/50 flex items-start">
            <textarea id="message" class="ml-4 w-full h-full border-none focus:outline-none"
                placeholder="Your message"></textarea>
        </div>
        <div class="w-[768px] h-16 relative">
            <button type="submit"
                class="w-[768px] h-16 left-0 top-0 absolute bg-[#075efd] hover:bg-x-yellow transition duration-150 ease-in-out flex items-center justify-center">
                <span class="text-[#ffffff] text-2xl font-bold font-['Sen'] leading-loose">Send Message</span>
            </button>
        </div>
    </form>



</template>

<script setup lang="ts">
import {
        onMounted
    } from 'vue';

    onMounted(() => {
        window.scrollTo(0, 0);
    });
</script>