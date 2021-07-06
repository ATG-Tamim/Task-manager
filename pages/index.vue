<template>
  <section class="z-0 bg-gray-100 grid grid-cols-12 h-screen overflow-x-hidden">
    <transition name="slide">
      <div v-if="headerShow" class="xl:col-span-2 fixed z-50">
        <Navbar />
      </div>
    </transition>
    <div
      @click="headerShow = !headerShow"
      class="bg-blue-500 fixed xl:hidden rounded-full w-16 h-16 flex items-center justify-center cursor-pointer bottom-5 right-5 z-50 opacity-60"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="36
      " viewBox="0 0 87 55">
        <g id="Group_4" data-name="Group 4" fill="white" transform="translate(-174 -453)">
          <rect
            id="Rectangle_5"
            data-name="Rectangle 5"
            width="87"
            height="12"
            rx="6"
            transform="translate(174 453)"
          />
          <rect
            id="Rectangle_6"
            data-name="Rectangle 6"
            width="87"
            height="12"
            rx="6"
            transform="translate(174 475)"
          />
          <rect
            id="Rectangle_7"
            data-name="Rectangle 7"
            width="43"
            height="11"
            rx="5.5"
            transform="translate(218 497)"
          />
        </g>
      </svg>
    </div>
    <div class="xl:col-span-10 col-span-12 xl:col-start-3 mx-5 flex flex-1 flex-col">
      <div>
        <Header />
        <div :class="isShow && 'h-auto'" class="overflow-y-hidden h-28 sm:h-auto flex flex-col">
          <Cards />
        </div>
        <div
          @click="show"
          class="text-center mt-4 text-sm font-bold text-blue-600 cursor-pointer sm:hidden"
        >{{showTxt}}</div>
      </div>
      <div class="mt-3 flex flex-col flex-1">
        <div class="bg-white mt-5 border border-gray-300 rounded-md mb-5 flex flex-col flex-1">
          <div class="w-full border-b border-gray-300 py-3 flex items-center px-5">
            <div class="text-base font-bold text-gray-500 mr-6">Tasks</div>
            <div
              class="border border-blue-500 rounded-md px-3 py-2 w-max text-base font-bold text-blue-500 cursor-pointer select-none"
            >Add New Tasks</div>
          </div>
          <div class="flex flex-row p-2 overflow-hidden scroll-bar overflow-x-auto flex-1">
            <div
              class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md min-width min-height w-72 mr-2"
            >
              <div class="text-sm font-bold text-gray-500 ml-2 my-2 sticky top-0">On Hold</div>
              <div class="relative top-0 bottom-0 rounded-md flex-1 overflow-y-scroll scroll-bar">
                <div class="absolute overflow-auto scroll-bar rounded-md w-full">
                  <div
                    v-for="i in 6"
                    :key="i"
                    class="w-full bg-white rounded-md p-3 flex justify-between my-2 first:mt-0 last:mb-0"
                  >
                    <div>
                      <div class="text-sm font-bold ml-1">Design homepage</div>
                      <div class="flex row mt-2">
                        <div
                          class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                        <div
                          class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                        <div
                          class="w-6 h-6 text-white text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                      </div>
                    </div>
                    <div class="flex flex-col items-end">
                      <div class="w-5 cursor-pointer">
                        <img src="~/static/icons/more.svg" alt />
                      </div>
                      <div class="flex items-center mt-3">
                        <div class="flex items-center mr-3">
                          <div>
                            <img class="w-4" src="~/static/icons/schedual.svg" alt />
                          </div>
                          <div class="text-sm text-gray-500">00:00:00 h</div>
                        </div>
                        <div>
                          <img src="~/static/icons/low.svg" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center text-sm font-semibold text-blue-600 w-full py-2 cursor-pointer rounded-md mt-2 transition-all duration-150 ease hover:bg-gray-300 sticky bottom-0"
              >
                <div class="mr-1">
                  <img class="w-4" src="~/static/icons/add.svg" alt="add" />
                </div>
                <div>Add new task</div>
              </div>
            </div>
            <div
              class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md min-width min-height w-72 mr-2"
            >
              <div class="text-sm font-bold text-gray-500 ml-2 my-2 sticky top-0">On Hold</div>
              <div class="relative top-0 bottom-0 rounded-md flex-1 overflow-y-scroll scroll-bar">
                <div class="absolute overflow-auto scroll-bar rounded-md w-full">
                  <div
                    v-for="i in 2"
                    :key="i"
                    class="w-full bg-white rounded-md p-3 flex justify-between my-2 first:mt-0 last:mb-0"
                  >
                    <div>
                      <div class="text-sm font-bold ml-1">Design homepage</div>
                      <div class="flex row mt-2">
                        <div
                          class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                        <div
                          class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                        <div
                          class="w-6 h-6 text-white text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                      </div>
                    </div>
                    <div class="flex flex-col items-end">
                      <div class="w-5 cursor-pointer">
                        <img src="~/static/icons/more.svg" alt />
                      </div>
                      <div class="flex items-center mt-3">
                        <div class="flex items-center mr-3">
                          <div>
                            <img class="w-4" src="~/static/icons/schedual.svg" alt />
                          </div>
                          <div class="text-sm text-gray-500">00:00:00 h</div>
                        </div>
                        <div>
                          <img src="~/static/icons/low.svg" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center text-sm font-semibold text-blue-600 w-full py-2 cursor-pointer rounded-md mt-2 transition-all duration-150 ease hover:bg-gray-300 sticky bottom-0"
              >
                <div class="mr-1">
                  <img class="w-4" src="~/static/icons/add.svg" alt="add" />
                </div>
                <div>Add new task</div>
              </div>
            </div>
            <div
              class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md min-width min-height w-72 mr-2"
            >
              <div class="text-sm font-bold text-gray-500 ml-2 my-2 sticky top-0">In Progress</div>
              <div class="relative top-0 bottom-0 rounded-md flex-1 scroll-bar overflow-y-scroll">
                <div class="absolute overflow-auto scroll-bar rounded-md w-full">
                  <div
                    v-for="i in 2"
                    :key="i"
                    class="w-full bg-white rounded-md p-3 flex justify-between my-2 first:mt-0 last:mb-0"
                  >
                    <div>
                      <div class="text-sm font-bold ml-1">Design homepage</div>
                      <div class="flex row mt-2">
                        <div
                          class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                        <div
                          class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                        <div
                          class="w-6 h-6 text-white text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                      </div>
                    </div>
                    <div class="flex flex-col items-end">
                      <div class="w-5 cursor-pointer">
                        <img src="~/static/icons/more.svg" alt />
                      </div>
                      <div class="flex items-center mt-3">
                        <div class="flex items-center mr-3">
                          <div>
                            <img class="w-4" src="~/static/icons/schedual.svg" alt />
                          </div>
                          <div class="text-sm text-gray-500">00:00:00 h</div>
                        </div>
                        <div>
                          <img src="~/static/icons/low.svg" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center text-sm font-semibold text-blue-600 w-full py-2 cursor-pointer rounded-md mt-2 transition-all duration-150 ease hover:bg-gray-300 sticky bottom-0"
              >
                <div class="mr-1">
                  <img class="w-4" src="~/static/icons/add.svg" alt="add" />
                </div>
                <div>Add new task</div>
              </div>
            </div>
            <div
              class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md min-width min-height w-72"
            >
              <div class="text-sm font-bold text-gray-500 ml-2 my-2 sticky top-0">In Progress</div>
              <div
                class="relative top-0 bottom-0 rounded-md w-full flex-1 scroll-bar overflow-y-scroll"
              >
                <div class="absolute overflow-auto scroll-bar rounded-md w-full">
                  <div
                    v-for="i in 2"
                    :key="i"
                    class="w-full bg-white rounded-md p-3 flex justify-between my-2 first:mt-0 last:mb-0"
                  >
                    <div>
                      <div class="text-sm font-bold ml-1">Design homepage</div>
                      <div class="flex row mt-2">
                        <div
                          class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                        <div
                          class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                        <div
                          class="w-6 h-6 text-white text-xs rounded-full bg-green-400 flex items-center justify-center"
                        >BD</div>
                      </div>
                    </div>
                    <div class="flex flex-col items-end">
                      <div class="w-5 cursor-pointer">
                        <img src="~/static/icons/more.svg" alt />
                      </div>
                      <div class="flex items-center mt-3">
                        <div class="flex items-center mr-3">
                          <div>
                            <img class="w-4" src="~/static/icons/schedual.svg" alt />
                          </div>
                          <div class="text-sm text-gray-500">00:00:00 h</div>
                        </div>
                        <div>
                          <img src="~/static/icons/low.svg" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center text-sm font-semibold text-blue-600 w-full py-2 cursor-pointer rounded-md mt-2 transition-all duration-150 ease hover:bg-gray-300 sticky bottom-0"
              >
                <div class="mr-1">
                  <img class="w-4" src="~/static/icons/add.svg" alt="add" />
                </div>
                <div>Add new task</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      showTxt: 'More',
      headerShow: true,
    }
  },

  methods: {
    show() {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.showTxt = 'Less'
      } else {
        this.showTxt = 'More'
      }
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

body {
  font-family: 'Source Sans Pro', sans-serif;
}

.scroll-bar::-webkit-scrollbar {
  appearance: none;
  width: 0;
  height: 0%;
}

.min-height {
  min-height: 360px;
}

.min-width {
  min-width: 280px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-enter,
.slide-leave-active {
  opacity: 0;
  transform: translateX(-300px);
}
</style>

