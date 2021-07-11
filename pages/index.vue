<template>
  <section class="z-0 bg-gray-100 grid grid-cols-12 h-screen overflow-x-hidden">
    <div
      @click="navShow = !navShow"
      class="w-8 h-8 absolute top-4 left-1 cursor-pointer xl:hidden flex justify-center items-center z-50"
    >
      <div v-if="!navShow" class="material-icons" style="font-size: 30px !important">apps</div>
      <div v-if="navShow" class="material-icons" style="font-size: 30px !important">cancel</div>
    </div>
    <div
      @click="navShow = false"
      :style="navShow && 'transform: translateX(0) !important; right: 0 ; left: 0; width: 100% !important; background: rgba(0,0,0, 0.4)'"
      class="w-max xl:col-span-2 fixed z-40 transform -translate-x-56 xl:translate-x-0 transition-all duration-300 ease"
    >
      <div class="flex flex-col"></div>
      <Navbar />
    </div>

    <div class="ml-10 xl:ml-5 xl:col-span-10 col-span-12 xl:col-start-3 mx-5 flex flex-1 flex-col">
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
          <Skeleton variant="text" />
          <Boards />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Skeleton from '../components/Skeleton.vue'
export default {
  components: { Skeleton },
  data() {
    return {
      isShow: false,
      showTxt: 'More',
      navShow: false,
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

