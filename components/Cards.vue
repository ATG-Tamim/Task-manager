<template>
  <div class="grid grid-cols-8 mt-8 gap-3">
    <!-- Skeleton Loader -->
    <skeleton v-if="isLoad" class="grid grid-cols-8 mt-8 gap-3 col-span-8">
      <Skeleton
        v-for="(i, n) in 4"
        :key="'d' + n"
        class="bg-gray-200 px-2 h-20 sm:h-auto relative col-span-8 sm:col-span-4 lg:col-span-2 p-4 rounded-md"
      >
        <skeleton
          variant="circle"
          width="28"
          height="28"
          animation="wave"
          class="absolute right-3 top-3 rounded-full px-2"
        />
        <skeleton>
          <skeleton animation="wave" class="rounded w-4/5 h-4 mb-1" />
          <skeleton animation="wave" class="rounded w-1/2 h-4" />
        </skeleton>
      </Skeleton>
    </skeleton>
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
import Skeleton from './Skeleton.vue'
export default {
  components: { Skeleton },
  data() {
    return {
      show: true,
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
        .$get('/cards')
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
