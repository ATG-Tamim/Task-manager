<template>
  <div class="grid grid-cols-8 mt-8 gap-3">
    <div
      v-for="i in 4"
      :key="i"
      class="bg-white border border-gray-300 relative col-span-2 p-4 rounded-md"
    >
      <div class="w-5 absolute right-3 top-3">
        <img src="~/static/icons/work.svg" alt="work" />
      </div>
      <div>
        <div class="text-sm font-semibold text-gray-500">Total time on Project</div>
        <div class="text-2xl font-bold">
          3:30
          <sup class="text-xs font-bold">h</sup>
        </div>
      </div>
    </div>
  </div>
</template>
