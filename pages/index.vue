<template>
  <section class="bg-gray-100 grid grid-cols-12">
    <div class="col-span-2 fixed">
      <Navbar />
    </div>
    <div class="col-span-10 col-start-3 mx-5">
      <div>
        <Header />
        <Cards />
      </div>
      <div class="bg-white h-screen mt-5 border border-gray-300 rounded-md relative mb-5">
        <div class="w-full border-b border-gray-300 py-3 flex items-center px-5">
          <div class="text-base font-bold text-gray-500 mr-6">Tasks</div>
          <div
            class="border border-blue-500 rounded-md px-3 py-2 w-max text-base font-bold text-blue-500 cursor-pointer select-none"
          >Add New Tasks</div>
        </div>
        <div class="grid grid-cols-8 gap-x-2 p-2">
          <div class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md">
            <div class="text-sm font-bold text-gray-500 ml-2 my-2">To Do</div>
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="w-full bg-white rounded-md p-3 flex justify-between my-2">
                  <div>
                    <div class="text-sm font-bold ml-1">Design homepage</div>
                    <div class="flex row mt-2">
                      <div
                        class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                      <div
                        class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                      <div
                        class="w-6 h-6 text-white text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                    </div>
                  </div>
                  <div class="flex flex-col items-end">
                    <div class="w-5 cursor-pointer">
                      <img src="~/static/icons/more.svg" alt />
                    </div>
                    <div class="flex items-center mt-3">
                      <div class="flex items-center mr-3">
                        <div>
                          <img class="w-4" src="~/static/icons/schedual.svg" alt />
                        </div>
                        <div class="text-sm text-gray-500">00:00:00 h</div>
                      </div>
                      <div>
                        <img src="~/static/icons/low.svg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center text-sm font-semibold text-blue-600 w-full py-2 cursor-pointer rounded-md mt-2 transition-all duration-150 ease hover:bg-gray-300"
              >
                <div class="mr-1">
                  <img class="w-4" src="~/static/icons/add.svg" alt="add" />
                </div>
                <div>Add new task</div>
              </div>
            </div>
          </div>
          <div class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md">
            <div class="text-sm font-bold text-gray-500 ml-2 my-2">On Hold</div>
            <div class="flex flex-col justify-between h-full">
              <div>
                <div
                  v-for="i in 2"
                  :key="i"
                  class="w-full bg-white rounded-md p-3 flex justify-between my-2"
                >
                  <div>
                    <div class="text-sm font-bold ml-1">Design homepage</div>
                    <div class="flex row mt-2">
                      <div
                        class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                      <div
                        class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                      <div
                        class="w-6 h-6 text-white text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                    </div>
                  </div>
                  <div class="flex flex-col items-end">
                    <div class="w-5 cursor-pointer">
                      <img src="~/static/icons/more.svg" alt />
                    </div>
                    <div class="flex items-center mt-3">
                      <div class="flex items-center mr-3">
                        <div>
                          <img class="w-4" src="~/static/icons/schedual.svg" alt />
                        </div>
                        <div class="text-sm text-gray-500">00:00:00 h</div>
                      </div>
                      <div>
                        <img src="~/static/icons/low.svg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center text-sm font-semibold text-blue-600 w-full py-2 cursor-pointer rounded-md mt-2 transition-all duration-150 ease hover:bg-gray-300"
              >
                <div class="mr-1">
                  <img class="w-4" src="~/static/icons/add.svg" alt="add" />
                </div>
                <div>Add new task</div>
              </div>
            </div>
          </div>
          <div class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md">
            <div class="text-sm font-bold text-gray-500 ml-2 my-2">In Progress</div>
            <div class="flex flex-col justify-between h-full">
              <div>
                <div
                  v-for="i in 3"
                  :key="i"
                  class="w-full bg-white rounded-md p-3 flex justify-between my-2"
                >
                  <div>
                    <div class="text-sm font-bold ml-1">Design homepage</div>
                    <div class="flex row mt-2">
                      <div
                        class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                      <div
                        class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                      <div
                        class="w-6 h-6 text-white text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                    </div>
                  </div>
                  <div class="flex flex-col items-end">
                    <div class="w-5 cursor-pointer">
                      <img src="~/static/icons/more.svg" alt />
                    </div>
                    <div class="flex items-center mt-3">
                      <div class="flex items-center mr-3">
                        <div>
                          <img class="w-4" src="~/static/icons/schedual.svg" alt />
                        </div>
                        <div class="text-sm text-gray-500">00:00:00 h</div>
                      </div>
                      <div>
                        <img src="~/static/icons/low.svg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center text-sm font-semibold text-blue-600 w-full py-2 cursor-pointer rounded-md mt-2 transition-all duration-150 ease hover:bg-gray-300"
              >
                <div class="mr-1">
                  <img class="w-4" src="~/static/icons/add.svg" alt="add" />
                </div>
                <div>Add new task</div>
              </div>
            </div>
          </div>
          <div class="col-span-2 bg-gray-200 flex flex-col p-2 rounded-md">
            <div class="text-sm font-bold text-gray-500 ml-2 my-2">Done</div>
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="w-full bg-white rounded-md p-3 flex justify-between my-2">
                  <div>
                    <div class="text-sm font-bold ml-1">Design homepage</div>
                    <div class="flex row mt-2">
                      <div
                        class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                      <div
                        class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                      <div
                        class="w-6 h-6 text-white text-xs rounded-full bg-green-400 flex items-center justify-center"
                      >BD</div>
                    </div>
                  </div>
                  <div class="flex flex-col items-end">
                    <div class="w-5 cursor-pointer">
                      <img src="~/static/icons/more.svg" alt />
                    </div>
                    <div class="flex items-center mt-3">
                      <div class="flex items-center mr-3">
                        <div>
                          <img class="w-4" src="~/static/icons/schedual.svg" alt />
                        </div>
                        <div class="text-sm text-gray-500">00:00:00 h</div>
                      </div>
                      <div>
                        <img src="~/static/icons/low.svg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center text-sm font-semibold text-blue-600 w-full py-2 cursor-pointer rounded-md mt-2 transition-all duration-150 ease hover:bg-gray-300"
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
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

body {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>

