<template>
  <div class="flex flex-row p-2 overflow-hidden scroll-bar overflow-x-auto flex-1">
    <skeleton
      v-if="isLoad"
      class="flex flex-row p-2 overflow-hidden scroll-bar overflow-x-auto flex-1"
    >
      <skeleton
        v-for="(i, n) in 4"
        :key="'e' + n"
        variant="rect"
        animation="wave"
        class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md min-width min-height w-72 mr-2"
      />
    </skeleton>
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
          <kanbanData v-for="(data, index) in kanban.card" :key="index" :card="data" />
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
</template>

<script>
import Skeleton from './Skeleton.vue'
export default {
  components: { Skeleton },
  data() {
    return {
      data: [],
      isLoad: true,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.isLoad = true
      this.$axios
        .$get('/kanbans')
        .then((res) => {
          let timer = setTimeout(() => {
            this.isLoad = false
            this.data = res
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
