<template>
    <div>
        <div class="flex justify-between mb-2">
          <div class="relative">
            <button
              @click="isOpen = !isOpen"
              class="flex items-center justify-between w-48 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300"
              >
              <span>{{ selectedType }}</span>
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              v-if="isOpen"
              class="absolute z-10 w-48 mt-2 bg-white border border-gray-300 rounded-md shadow-lg"
              >
              <ul>
                <li
                  v-for="type in types"
                  :key="type"
                  @click="selectType(type)"
                  class="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {{ type }}
                </li>
              </ul>
            </div>
          </div>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">New Task</button>
        </div>
        <div class="flex flex-row items-start">
          <input type="checkbox" class="mt-1.5 mr-4"/>
          <div>
            <div class="flex items-center mb-4 text-left" style="justify-content: space-between;">
              <div class="flex items-center">
                <p class="font-bold" style="font-size: 16px;" >Close off Case #012920- RODRIGUES, Amiguel</p>
              </div>
              <div class="flex items-center">
                <p class="font-bold" style="color: red; font-size: 12px;">2 Days Left</p>
                <p class="font-bold" style="font-size: 12px;">12/06/2021</p>
                <img class="mr-6" :src="ArrowDropdown" alt="ArrowDropdown Icon" />
                <img class="mr-6" :src="More" alt="More Icon" />
              </div>
            </div>
            <div class="flex flex-col mb-4">
              <div class="flex items-center">
                <img class="mr-6" :src="Clock" alt="Clock Icon" />
                <input type="date" class="border-2 border-gray-400 px-2 py-1 rounded">
              </div>
              <div class="flex items-center mt-2">
                <img class="mr-6" :src="Edit" alt="Edit Icon" />
                <p class="text-left" style="line-height: 1.0;">Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!</p>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-t-3 border-gray-400 my-4">
    </div>
</template>

<script>
import More from '../assets/more.svg'
import ArrowDropdown from '../assets/arrow-dropdwon.svg'
import Clock from '../assets/clock.svg'
import Edit from '../assets/edit.svg'
export default {
  computed: {
    ArrowDropdown () {
      return ArrowDropdown
    },
    Clock () {
      return Clock
    },
    Edit () {
      return Edit
    },
    More () {
      return More
    }
  },
  data () {
    return {
      isOpen: false,
      selectedType: 'All',
      types: ['All', 'Work', 'Personal', 'Shopping', 'Other']
    }
  },
  methods: {
    selectType (type) {
      this.selectedType = type
      this.isOpen = false
      // Emit event or perform other actions here
    }
  }
}
</script>

<style>

</style>
