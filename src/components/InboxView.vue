<template>
    <div>
        <div v-if="!isDetail">
            <div class="search-container mb-2">
            <div class="flex items-center border rounded overflow-hidden w-full">
                <input
                type="text"
                placeholder="Search"
                class="flex-1 px-4 py-2 bg-transparent border-none focus:outline-none"
                />
                <img :src="Search" alt="Search Icon" class="w-6 h-6 mr-5"/>
            </div>
            </div>
            <div @click="changeView(true)">
            <div class="flex items-center" style="justify-content: space-between;">
                <div class="flex">
                <img :src="Group" alt="Group Icon" />
                <div class="flex flex-col flex-grow text-left ml-4">
                    <p class="font-bold" style="font-size: 16px;">109220-Naturalization</p>
                    <p class="" style="font-size: 14px ;">Cameron Philips:</p>
                    <p class="" style="font-size: 14px ;">Please check this out!</p>
                </div>
                <div class="text-sm ml-4 mt-1">01/06/2021 12:19</div>
                </div>
                <div class="h-2 w-2 ml-4 flex items-center justify-center rounded-full bg-red-500 text-white"></div>
            </div>
            <hr class="border-t-3 border-gray-400 my-4">
            </div>
            <div>
            <div class="flex items-center" style="justify-content: space-between;">
                <div class="flex">
                <div class="profile-circle">B</div>
                <div class="flex flex-col flex-grow text-left ml-4">
                    <p class="font-bold" style="font-size: 16px;">109220-Naturalization</p>
                    <p class="" style="font-size: 14px ;">Cameron Philips:</p>
                    <p class="" style="font-size: 14px ;">Please check this out!</p>
                </div>
                <div class="text-sm ml-4 mt-1">01/06/2021 12:19</div>
                </div>
                <div class="h-2 w-2 ml-4 flex items-center justify-center rounded-full bg-red-500 text-white"></div>
            </div>
            <hr class="border-t-3 border-gray-400 my-4">
            </div>
        </div>
        <div v-if="isDetail">
            <div>
                <!-- header -->
                <div class="flex flex-arrow border-b-2" style="justify-content: space-between; padding-bottom: 18px; border-color: #BDBDBD;">
                    <div class="flex flex-row">
                        <img class="mr-6" @click="changeView(false)" :src="BackArrow" alt="BackArrow Icon" />
                        <div style="text-align: left;">
                            <p class="font-bold" style="color: #2F80ED; font-size: 16px;">109220-Naturalization</p>
                            <p style="font-size: 12px;">3 Participants</p>
                        </div>
                    </div>
                    <img @click="closePopUp" :src="CloseBlack" alt="Close Icon"/>
                </div>
                <!-- body chat -->
                <div>
                    <div class="flex flex-col items-end">
                        <div class="text-xs text-purple-600 mt-1 font-bold">You</div>
                        <div class="flex flex-row items-start">
                            <img class="mr-4" :src="More" alt="More Icon" />
                            <div class="p-2 rounded-lg max-w-md text-left" style="background-color: #EEDCFF;">
                                <p style="font-size: 14px;">No Worries. It will be completed ASAP. I've asked him yesterday</p>
                                <p style="font-size: 12px;">19:32</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center my-8">
                        <div class="border-l h-0.5 border-gray-400 flex-grow">
                            <hr class="border-b-1 border-gray-400">
                        </div>
                        <p class="text-gray-600 mx-4">January 1, 2022</p>
                        <div class="border-r h-0.5 border-gray-400 flex-grow">
                            <hr class="border-b-1 border-gray-400">
                        </div>
                    </div>
                    <div class="flex flex-col items-start">
                        <div class="text-xs mt-1 font-bold" style="color: #E5A443;">Mary Hilda</div>
                        <div class="flex flex-row items-start">
                            <div class="p-2 rounded-lg max-w-md text-left" style="background-color: #FCEED3;">
                                <p style="font-size: 14px;">No Worries. It will be completed ASAP. I've asked him yesterday. No Worries. It will be completed ASAP. I've asked him yesterday</p>
                                <p style="font-size: 12px;">19:32</p>
                            </div>
                            <img class="mr-4" :src="More" alt="More Icon" />
                        </div>
                    </div>
                    <div class="flex flex-col items-end">
                        <div class="text-xs text-purple-600 mt-1 font-bold">You</div>
                        <div class="flex flex-row items-start">
                            <img class="mr-4" :src="More" alt="More Icon" />
                            <div class="p-2 rounded-lg max-w-md text-left" style="background-color: #EEDCFF;">
                                <p style="font-size: 14px;">No Worries. It will be completed ASAP. I've asked him yesterday</p>
                                <p style="font-size: 12px;">19:32</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-start">
                        <div class="text-xs mt-1 font-bold" style="color: #E5A443;">Mary Hilda</div>
                        <div class="flex flex-row items-start">
                            <div class="p-2 rounded-lg max-w-md text-left" style="background-color: #FCEED3;">
                                <p style="font-size: 14px;">No Worries.</p>
                                <p style="font-size: 12px;">19:32</p>
                            </div>
                            <img class="mr-4" :src="More" alt="More Icon" />
                        </div>
                    </div>
                    <div class="flex items-center my-8">
                        <div class="border-l h-0.5 border-red-400 flex-grow">
                            <hr class="border-b-1 border-red-400">
                        </div>
                        <p class="text-red-600 mx-4">Today</p>
                        <div class="border-r h-0.5 border-red-400 flex-grow">
                            <hr class="border-b-1 border-red-400">
                        </div>
                    </div>
                    <div class="flex flex-col items-start">
                        <div class="text-xs mt-1 font-bold" style="color: #43B78D;">Mary Hilda</div>
                        <div class="flex flex-row items-start">
                            <div class="p-2 rounded-lg max-w-md text-left" style="background-color: #D2F2EA;">
                                <p style="font-size: 14px;">No Worries.</p>
                                <p style="font-size: 12px;">19:32</p>
                            </div>
                            <img class="mr-4" :src="More" alt="More Icon" />
                        </div>
                    </div>
                </div>
                <!-- footer -->
                <div>
                    <div class="flex items-center mt-4">
                        <input type="text" class="flex-1 border rounded-l py-2 px-4 mr-2" placeholder="Type a message...">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Group from '../assets/group.svg'
import Search from '../assets/search.svg'
import BackArrow from '../assets/back-arrow.svg'
import CloseBlack from '../assets/close-black.svg'
import More from '../assets/more.svg'
export default {
  computed: {
    Group () {
      return Group
    },
    Search () {
      return Search
    },
    BackArrow () {
      return BackArrow
    },
    More () {
      return More
    },
    CloseBlack () {
      return CloseBlack
    }
  },
  data () {
    return {
      isDetail: false
    }
  },
  methods: {
    handleUpdate (newData) {
      this.currenStatus = newData
    },
    handleUpdateView (newData) {
      this.currenView = newData
    },
    changeView (data) {
      this.isDetail = data
      console.log(data)
    },
    closePopUp () {
      this.$emit('closePopUp')
    }
  }
}
</script>

<style scoped>
  .profile-circle {
    width: 34px;
    height: 34px;
    border-radius: 100%;
    background-color: #2F80ED;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

/* You can add scoped styles for this component here */
</style>
