<template>
  <div class="flex flex-col mt-[20px] ml-[120px] w-[1280px] h-[324px] relative">
    <div class="mt-12 w-full">
      <div class="flex gap-5">
        <div class="flex flex-col w-[25%] group hover:bg-blue-500 hover:text-white cursor-pointer">
          <router-link to="/business">
            <div
            class="flex flex-col grow items-start p-8 w-full border border-solid border-gray-300 group-hover:border-transparent">
            <div class="flex overflow-hidden relative flex-col w-12 aspect-square fill-orange-50">
              <img loading="lazy" src="@/assets/images/HomePage/Business logo.png"
              class="object-cover absolute inset-0 size-full" />
            </div>
            <div class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">
              Business
            </div>
            <div class="mt-1 text-base leading-7 font-['Inter'] text-gray-500 group-hover:text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </div>
          </div>
        </router-link>
        </div>

        <div class="flex flex-col ml-5 w-[25%] group hover:bg-blue-500 hover:text-white">
          <router-link to=""> 
            <div class="flex flex-col grow items-start p-8 w-full border border-solid border-gray-300">
              <img loading="lazy" src="@/assets/images/HomePage/Icon Startup.png"
              class="object-contain w-12 aspect-square fill-orange-50" />
              <div class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">
                Startup
              </div>
              <div class="self-stretch mt-1 text-base leading-7 font-['Inter'] text-gray-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </div>
            </div>
          </router-link>
          </div>

        <div class="flex flex-col ml-5 w-[25%] group hover:bg-blue-500 hover:text-white">
          <router-link to="">
            <div class="flex flex-col grow items-start p-8 w-full border border-solid border-gray-300">
              <img loading="lazy" src="@/assets/images/HomePage/Eco Icon.png"
              class="object-contain w-12 aspect-[0.98] fill-orange-50" />
              <div class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">
                Economy
              </div>
              <div class="self-stretch mt-1 text-base leading-7 font-['Inter'] text-gray-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </div>
            </div>
          </router-link>
          </div>
          
          <div class="flex flex-col ml-5 w-[25%] group hover:bg-blue-500 hover:text-white">
            <router-link to="">
              <div class="flex flex-col grow items-start p-8 w-full border border-solid border-gray-300">
                <img loading="lazy" src="@/assets/images/HomePage/Techno Icon.png"
                class="object-contain w-12 aspect-[0.96] fill-orange-50" />
                <div class="mt-3.5 text-3xl font-bold tracking-tighter leading-none text-gray-800 group-hover:text-white">
                  Technology
                </div>
                <div class="self-stretch mt-1 text-base leading-7 font-['Inter'] text-gray-500 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
              </div>
            </router-link>
        </div>
      </div>
    </div>
  </div>

</template>
