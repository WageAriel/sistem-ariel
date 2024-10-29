<template>
    <div class="flex flex-col ml-[50px] w-[1440px] h-[519px] relative">
      <div class="p-20 w-full bg-gray-100">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[55%]">
            <div class="flex flex-col items-start self-stretch my-auto w-full font-medium">
              <div class="text-base leading-none text-gray-800 uppercase tracking-[3px]">
                Featured Post
              </div>
              <div class="self-stretch mt-5 text-[40px] font-bold tracking-tighter leading-10 text-gray-800">
                Step-by-step guide to choosing great font pairs
              </div>
              <div class="mt-4 text-sm leading-none ">
                By <span class="text-amber-300">John Doe</span> l May 23, 2022
              </div>
              <div class="self-stretch mt-4 text-base leading-7 text-zinc-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </div>
              <router-link to="" class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out">
                Read More >
              </router-link> 
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[45%]">
            <img
              src="@/assets/images/BlogPage/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.png"
              class="object-contain grow w-full aspect-[1.43]"/>
          </div>
        </div>
      </div>
    </div>
  </template>