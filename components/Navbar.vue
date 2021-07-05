<template>
  <div class="bg-white shadow-lg min-w-max w-10/12 flex flex-col items-center h-screen">
    <div class="py-5 border-b-2 w-full flex items-center flex-col cursor-pointer">
      <Logo />
    </div>
    <!-- Nav-links -->
    <div class="flex flex-col h-full w-full items-center justify-between">
      <div class="flex flex-col w-full mt-2">
        <div
          class="w-full flex flex-row items-center py-3 px-10 cursor-pointer text-gray-400 select-none hover:bg-gray-100 hover:text-black"
        >
          <img class="w-5 mr-3" src="~/static/icons/view.svg" alt="dashboard" />
          <div class="text-xs font-medium">Dashboard</div>
        </div>
        <div
          class="w-full flex flex-row items-center py-3 px-10 cursor-pointer text-gray-400 select-none hover:bg-gray-100 hover:text-black transition-all duration-150 ease"
        >
          <img class="w-5 mr-3" src="~/static/icons/av-timer.svg" alt="task" />
          <div class="text-xs font-medium">Real-Time Tracking</div>
        </div>
        <div
          class="w-full flex flex-row items-center py-3 px-10 cursor-pointer text-gray-400 select-none hover:bg-gray-100 hover:text-black transition-all duration-150 ease"
        >
          <img class="w-5 mr-3" src="~/static/icons/media.svg" alt="task" />
          <div class="text-xs font-medium">Screenshots</div>
        </div>
        <div
          class="w-full flex flex-row items-center py-3 px-10 cursor-pointer text-gray-400 select-none hover:bg-gray-100 hover:text-black transition-all duration-150 ease"
        >
          <img class="w-5 mr-3" src="~/static/icons/group.svg" alt="task" />
          <div class="text-xs font-medium">Employees</div>
        </div>
        <div
          class="w-full flex flex-row items-center py-3 px-10 cursor-pointer text-gray-400 select-none hover:bg-gray-100 hover:text-black transition-all duration-150 ease"
        >
          <img class="w-5 mr-3" src="~/static/icons/work.svg" alt="task" />
          <div class="text-xs font-medium">Project Tracking</div>
        </div>
        <div
          class="w-full flex flex-row items-center py-3 px-10 cursor-pointer text-gray-400 select-none hover:bg-gray-100 hover:text-black transition-all duration-150 ease"
        >
          <img class="w-5 mr-3" src="~/static/icons/toll.svg" alt="task" />
          <div class="text-xs font-medium">Teams</div>
        </div>
        <div
          class="w-full flex flex-row items-center py-3 px-10 cursor-pointer text-gray-400 select-none hover:bg-gray-100 hover:text-black transition-all duration-150 ease"
        >
          <img class="w-5 mr-3" src="~/static/icons/event-note.svg" alt="task" />
          <div class="text-xs font-medium">Time and Attendance</div>
        </div>
        <div
          class="w-full flex flex-row items-center py-3 px-10 cursor-pointer text-gray-400 select-none hover:bg-gray-100 hover:text-black transition-all duration-150 ease"
        >
          <img class="w-5 mr-3" src="~/static/icons/dvr.svg" alt="task" />
          <div class="text-xs font-medium">Apps and Websites</div>
        </div>
        <div
          class="w-full flex flex-row items-center py-3 px-10 cursor-pointer text-gray-400 select-none hover:bg-gray-100 hover:text-black transition-all duration-150 ease"
        >
          <img class="w-5 mr-3" src="~/static/icons/settings.svg" alt="task" />
          <div class="text-xs font-medium">Settings</div>
        </div>
      </div>
      <div class="flex flex-col items-center mb-5 cursor-pointer">
        <div class="w-12 h-12 rounded-full overflow-hidden">
          <img src="~/static/images/avatar.jpg" alt />
        </div>
        <div class="text-base text-bold mt-1">Joe Geller</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
