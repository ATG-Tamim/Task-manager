<template>
  <div class="w-full bg-white rounded-md p-3 flex justify-between my-2">
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
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
}
</script>
