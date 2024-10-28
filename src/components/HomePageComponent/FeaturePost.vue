<template>
    <section class="flex flex-col w-[1282px] h-[804px] relative ml-[100px] mt-[100px]">
    <div
      class="flex gap-5 justify-between text-4xl font-bold leading-[48px] text-gray-800">
      <h2 class="tracking-tighter">Featured Post</h2>
      <h2 class="tracking-tighter ml-[220px]">All Posts</h2>
      <a href="#" class="my-auto text-base leading-7 text-amber-300" tabindex="0">View All</a>
    </div>
    <main class="mt-8 w-full">
      <div class="flex gap-5">
        <div class="flex flex-col w-[59%]">
          <div class="flex flex-col items-start p-8 mx-auto w-full">
            <img loading="lazy" src="../../assets/images/HomePage/white-concrete-building-1838640.jpg"
              alt="Featured blog post image"
              class="object-contain w-full aspect-[1.9]" />
            <div class="mt-8 text-sm font-medium leading-none">
              By <span class="text-amber-300">John Doe</span> l May 23, 2022
            </div>
            <h3
              class="font-bold mt-4 text-3xl tracking-tighter leading-10 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </h3>
            <p class="mt-4 text-base leading-7 text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
            <button class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out">
              Read More >
            </button>
          </div>
        </div>
        <aside class="flex flex-col ml-5 w-[41%]">
          <div class="flex flex-col">
            <div class="flex flex-col items-start py-7 pr-32 pl-8 bg-white">
              <div class="text-sm font-medium leading-none">
                By <span class="text-amber-300">John Deo</span> l Aug 23, 2021
              </div>
              <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                8 Figma design systems that you can download for free today.
              </h3>
            </div>
            <div class="flex flex-col items-start py-7 pr-32 pl-8 bg-orange-50">
              <div class="text-sm font-medium leading-none">
                By <span class="text-amber-300">John Doe</span> Aug 23, 2021
              </div>
              <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                8 Figma design systems that you can download for free today.
              </h3>
            </div>
            <div class="flex flex-col items-start py-7 pr-32 pl-8 bg-white">
              <div class="text-sm font-medium leading-none">
                By <span class="text-amber-300">John Doe</span> Aug 23, 2021
              </div>
              <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                8 Figma design systems that you can download for free today.
              </h3>
            </div>
            <div class="flex flex-col items-start py-7 pr-32 pl-8 bg-white">
              <div class="text-sm font-medium leading-none">
                By <span class="text-amber-300">John Doe</span> Aug 23, 2021
              </div>
              <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                8 Figma design systems that you can download for free today.
              </h3>
            </div>
          </div>
        </aside>
      </div>
    </main>
  </section>
</template>