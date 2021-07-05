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
      <div class="bg-white h-screen mt-5 border border-gray-300 rounded-md relative">
        <div class="w-full border-b border-gray-300 py-3 flex items-center px-5">
          <div class="text-base font-bold text-gray-500 mr-6">Tasks</div>
          <div
            class="border border-blue-500 rounded-md px-3 py-2 w-max text-base font-bold text-blue-500 cursor-pointer select-none"
          >Add New Tasks</div>
        </div>
        <div class="grid grid-cols-8 gap-2 p-2">
          <div class="col-span-2 bg-gray-200 h-96 flex flex-col justify-between p-2 rounded-md">
            <div>To Do</div>
            <div class="w-full bg-white rounded-md p-2">
              <div>
                <div class="text-sm font-bold">Design homepage</div>
                <div class="flex row mt-2">
                  <div
                    class="w-6 h-6 text-white mr-1 text-xs rounded-full bg-green-400 flex items-center justify-center"
                  >BD</div>
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
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <div></div>
              <div>Add new task</div>
            </div>
          </div>
          <div class="col-span-2 bg-gray-200 h-96"></div>
          <div class="col-span-2 bg-gray-200 h-96"></div>
          <div class="col-span-2 bg-gray-200 h-96"></div>
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

