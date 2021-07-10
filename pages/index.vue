<template>
  <section class="z-0 bg-gray-100 grid grid-cols-12 h-screen overflow-x-hidden">
    <transition name="slide">
      <div v-if="headerShow" class="xl:col-span-2 fixed z-50">
        <Navbar />
      </div>
    </transition>

    <div class="xl:col-span-10 col-span-12 xl:col-start-3 mx-5 flex flex-1 flex-col">
      <!-- Header -->
      <div>
        <Header />
        <transition name="slideUp">
          <div
            :class="isShow && 'max-height'"
            class="max-height-20 overflow-hidden sm:overflow-visible sm:h-auto sm:max-h-13 flex flex-col transition-all duration-700 ease"
          >
            <Cards />
          </div>
        </transition>
        <div
          @click="show"
          class="text-center mt-4 text-sm font-bold text-blue-600 cursor-pointer sm:hidden"
        >{{showTxt}}</div>
      </div>
      <!-- Section -->
      <div class="mt-3 flex flex-col flex-1">
        <div class="bg-white mt-5 border border-gray-300 rounded-md mb-5 flex flex-col flex-1">
          <div class="w-full border-b border-gray-300 py-3 flex items-center px-5">
            <div class="text-base font-bold text-gray-500 mr-6">Tasks</div>
            <div
              class="border border-blue-500 rounded-md px-3 py-2 w-max text-base font-bold text-blue-500 cursor-pointer select-none"
            >Add New Tasks</div>
          </div>
          <!-- Kanbans -->
          <div class="flex flex-row p-2 overflow-hidden scroll-bar overflow-x-auto flex-1">
            <!-- Kanban skeleton loader -->
            <div
              v-for="i in 4"
              :key="i"
              class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md min-width min-height w-72 mr-2"
              :class="isLoad && 'hidden'"
            >
              <!-- Kanban Header -->
              <div
                class="text-sm font-bold text-gray-500 ml-2 my-2 sticky top-0"
                :class="!isLoad && 'bg-gray-300 rounded  w-1/2 h-5 animate-wiggle'"
              ></div>
              <!-- Kanban Cards -->
              <div class="relative top-0 bottom-0 rounded-md flex-1 overflow-y-scroll scroll-bar">
                <div class="absolute overflow-auto scroll-bar rounded-md w-full">
                  <!-- Skeleton loader -->
                  <div
                    v-for="i in 3"
                    :key="i"
                    class="w-full bg-gray-100 rounded-md p-3 flex justify-between my-2"
                  >
                    <div>
                      <div class="bg-gray-300 rounded w-36 h-5 animate-wiggle ml-1"></div>
                      <div class="flex mt-2">
                        <div
                          v-for="i in 3"
                          :key="i"
                          class="bg-gray-300 rounded-full w-7 h-7 animate-wiggle mr-1 flex items-center justify-center"
                        ></div>
                      </div>
                    </div>
                    <div class="flex flex-col items-end">
                      <div class="bg-gray-300 rounded-full w-7 h-7 animate-wiggle"></div>
                      <div class="flex items-center mt-3"></div>
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
            <!-- Kanban Cards Data -->
            <div
              v-for="(kanban, index) in data"
              :key="index"
              class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md min-width min-height w-72 mr-2"
            >
              <!-- Kanban Header -->
              <div class="text-sm font-bold text-gray-500 ml-2 my-2 sticky top-0">{{kanban.title}}</div>
              <!-- Kanban Cards -->
              <div
                class="relative top-0 bottom-0 rounded-md flex-1 overflow-y-scroll scroll-bar cursor-pointer"
              >
                <div class="absolute overflow-auto scroll-bar rounded-md w-full">
                  <div
                    v-for="(card, index) in kanban.card"
                    :key="index"
                    class="w-full bg-white rounded-md p-3 flex justify-between my-2"
                  >
                    <div>
                      <div class="w-32 h-5 ml-1 text-sm font-bold">{{card.name}}</div>
                      <div class="flex mt-2">
                        <div
                          v-for="(pic, index) in card.avatar"
                          :key="index"
                          class="rounded-full w-7 h-7 mr-1 flex items-center justify-center"
                        >
                          <img class="rounded-full" :src="pic.pic" alt />
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col items-end">
                      <div class="w-7 h-7 material-icons">more_horiz</div>
                      <div class="flex items-center mt-3 text-xs w-28">
                        <div class="material-icons icon-20">schedule</div>
                        <div class="mx-1">{{card.time}}</div>
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
      isLoad: false,
      data: [],
    }
  },

  mounted() {
    this.fetchData()
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
    fetchData() {
      this.$axios
        .$get('/kanbans')
        .then((res) => {
          let timer = setTimeout(() => {
            this.isLoad = true
          }, 3000)
          this.data = res
        })
        .catch((error) => {
          this.isLoad = false
          alert(error)
        })
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

.max-height {
  max-height: 500px !important;
}
.max-height-20 {
  max-height: 120px;
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 1s linear;
  max-height: 500px;
}
.slideUp-enter,
.slideUp-leave-active {
  opacity: 0;
  max-height: 120px;
}

.icon-20 {
  font-size: 20px !important;
}
</style>

