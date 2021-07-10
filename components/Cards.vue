<template>
  <div class="grid grid-cols-8 mt-8 gap-3">
    <!-- Skeleton Loader -->
    <div
      v-for="i in 4"
      :key="i"
      class="bg-gray-200 px-2 h-20 sm:h-auto relative col-span-8 sm:col-span-4 lg:col-span-2 p-4 rounded-md"
      :class="!isLoad && 'hidden'"
    >
      <div class="absolute right-3 top-3 bg-gray-300 rounded-full px-2 w-7 h-7 animate-wiggle"></div>
      <div>
        <div class="bg-gray-300 rounded w-4/5 h-4 mb-1 animate-wiggle"></div>
        <div class="bg-gray-300 rounded w-1/2 h-4 animate-wiggle"></div>
      </div>
    </div>
    <!-- Data Cards -->

    <div
      v-for="(data, index) in datas"
      :key="index"
      class="bg-white border border-gray-300 h-auto relative col-span-8 sm:col-span-4 lg:col-span-2 p-4 rounded-md"
      :class="isLoad && 'hidden'"
    >
      <div class="w-5 absolute right-3 top-3">
        <div class="material-icons icon-20">{{data.icon}}</div>
      </div>
      <div>
        <div class="text-sm font-semibold text-gray-500">{{data.name}}</div>

        <div class="text-2xl flex flex-row font-bold relative w-20">
          <sup class="text-xs font-bold mt-3 mr-1">{{data.usd}}</sup>
          {{data.performance}}
          <sup class="text-xs font-bold mt-3 ml-1">{{data.sup}}</sup>
          <div class="text-xs mt-3 ml-2 text-green-700 font-bold flex items-center">
            <div class="material-icons">{{data.upIcon}}</div>
            <div>{{data.up}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      isLoad: true,
      datas: [],
    }
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      this.$axios
        .$get('/cards')
        .then((res) => {
          let timer = setTimeout(() => {
            this.isLoad = false
          }, 3000)
          this.datas = res
        })
        .catch((error) => {
          this.isLoad = true
          alert(error)
        })
    },
  },
}
</script>
