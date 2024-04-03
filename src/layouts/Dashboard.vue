<template>
  <div class="flex h-screen bg-gray-800">
    <!-- Sidebar -->
    <div class="w-64 bg-transparent border-r-2 text-white">
      <!-- <div class="flex items-center justify-center bg-gray-700 h-16 border-b border-gray-700">Simple Quick Logo</div> -->
      <!-- <ul class="mt-0">
        <li class="px-4 py-3 hover:bg-gray-600 cursor-pointer">Dashboard</li>
        <li class="px-4 py-3 hover:bg-gray-600 cursor-pointer">Menu 1</li>
        <li class="px-4 py-3 hover:bg-gray-600 cursor-pointer">Menu 2</li>
        <li class="px-4 py-3 hover:bg-gray-600 cursor-pointer">Menu 3</li>
        <li class="px-4 py-3 hover:bg-gray-600 cursor-pointer">Menu 4</li>
      </ul> -->
    </div>

    <div class="flex-1 bg-gray-800">
      <!-- Navbar -->
      <div class="bg-gray-600 h-16 flex items-center justify-start px-4 gap-8">
        <img :src="Search" alt="Search Icon" class="w-6 h-6 " />
        <!-- <div class="text-white">Hi, Budi</div> -->
        <!-- <div>
          <button class="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded">Logout</button>
        </div> -->
      </div>
      <!-- Main content area -->
      <div class="p-4">
        <DashboardMain />
      </div>
    </div>
    <PopupWindow></PopupWindow>
  </div>
</template>

<script>
import PopupWindow from '../components/PopupWindow.vue'
import DashboardMain from '../pages/DashboardMain.vue'
import Task from '../assets/task.svg'
import Search from '../assets/search.svg'
export default {
  name: 'Dashboard',
  components: {
    PopupWindow, DashboardMain
  },
  computed: {
    Task () {
      return Task
    },
    Search () {
      return Search
    }
  }
}
</script>

<style scoped></style>
