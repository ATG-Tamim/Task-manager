<template>
  <div class="flex sm:items-start justify-between mt-5">
    <div class="flex flex-col">
      <div class="flex flex-row items-center ml-1">
        <div class="text-xs cursor-pointer">Projects</div>
        <div class="w-4">
          <img src="~/static/icons/arrow.svg" alt />
        </div>
        <div class="text-xs font-bold">Design System</div>
      </div>
      <div class="flex flex-row items-end mt-3 ml-1">
        <div class="sm:text-xl font-semibold">Design System</div>
        <div class="text-sm ml-4 text-purple-600 font-bold cursor-pointer">Edit</div>
      </div>
      <!-- Skeleton Loader -->
      <skeleton v-if="isLoad" class="w-full md:flex flex-row mt-3 bg-gray-200 p-2 rounded">
        <skeleton
          variant="text"
          width="96"
          heiht="16"
          animation="wave"
          v-for="(i, n) in 3"
          :key="'e' + n"
          class="rounded mr-5 mt-2 md:mt-0"
        />
      </skeleton>
      <!-- Data -->
      <div class="flex md:items-center md:flex-row flex-col mt-3 text-gray-500">
        <div
          v-for="(data, index) in datas"
          :key="index"
          class="text-xs md:text-sm font-semibold flex items-center mr-5"
        >
          <div class="w-5 mr-1 flex">
            <div class="material-icons icon-20">{{data.icon}}</div>
          </div>
          <div class="flex items-center">
            <div class="mr-2">{{data.name}}</div>
            <div class="font-extrabold">{{data.time}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-start flex-col sm:flex-row sm:items-center cursor-pointer">
      <div class="rounded-full max-w-max p-2 border border-blue-700 mr-4">
        <img class="w-7" src="~/static/icons/bell.svg" alt />
      </div>
      <div
        class="flex items-center bg-gray-200 mt-2 sm:mt-0 rounded-full p-2 sm:px-5 sm:py-1 md:px-4 md:py-2 sm:pr-10"
      >
        <div class="sm:w-6 sm:mr-2">
          <img class="w-7 sm:w-auto" src="~/static/icons/date.svg" alt />
        </div>
        <div class="hidden sm:block">
          <div class="text-sm font-semibold">Total time</div>
          <div class="text-xs">Calendar is not available</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from './Skeleton.vue'
export default {
  components: { Skeleton },
  data() {
    return {
      isLoad: false,
      datas: [],
    }
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      this.isLoad = true
      this.$axios
        .$get('/header')
        .then((res) => {
          let timer = setTimeout(() => {
            this.isLoad = false
            this.datas = res
          }, 3000)
        })
        .catch((error) => {
          let timer = setTimeout(() => {
            this.isLoad = false
            alert(error)
          }, 3000)
        })
    },
  },
}
</script>
