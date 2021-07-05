<template>
  <div class="flex items-center justify-between mt-5">
    <div class="flex flex-col">
      <div class="flex flex-row items-center ml-1">
        <div class="text-xs cursor-pointer">Projects</div>
        <div class="w-4">
          <img src="~/static/icons/arrow.svg" alt />
        </div>
        <div class="text-xs font-bold">Design System</div>
      </div>
      <div class="flex flex-row items-end mt-3 ml-1">
        <div class="text-xl font-semibold">Design System</div>
        <div class="text-sm ml-4 text-purple-600 font-bold cursor-pointer">Edit</div>
      </div>
      <div class="flex items-center flex-row mt-3 text-gray-500">
        <div class="text-sm font-semibold flex items-center mr-5">
          <div class="w-5 mr-1">
            <img src="~/static/icons/flash.svg" alt="flash" />
          </div>
          <div>Active Project</div>
        </div>
        <div class="text-sm font-semibold flex items-center mr-5">
          <div class="w-5 mr-1">
            <img src="~/static/icons/user.svg" alt="user" />
          </div>
          <div>4 assignees</div>
        </div>
        <div class="text-sm font-semibold flex items-center mr-5">
          <div class="w-5 mr-1">
            <img src="~/static/icons/budget.svg" alt="user" />
          </div>
          <div class="flex items-center">
            <div class="mr-2">Budget:</div>
            <div class="font-extrabold">32 hours</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center mr-10 cursor-pointer">
      <div class="rounded-full max-w-max p-3 border border-blue-700 mr-4">
        <img class="w-7" src="~/static/icons/bell.svg" alt />
      </div>
      <div class="flex items-center bg-gray-200 rounded-full w-max px-4 py-2 pr-10">
        <div class="w-6 mr-2">
          <img src="~/static/icons/date.svg" alt />
        </div>
        <div>
          <div class="text-sm font-semibold">Total time</div>
          <div class="text-xs">Calendar is not available</div>
        </div>
      </div>
    </div>
  </div>
</template>
