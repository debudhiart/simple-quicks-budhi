<template>
  <div class="fixed bottom-20 right-4">
    <div v-if="currenStatus!='active' && currenStatus!='nonactive'" class="mb-4 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <!-- Taks -->
      <div v-if="currenStatus=='task'" class="bg-white p-8 rounded-lg shadow-xl" style="width: 40vw; height: 70vh; overflow: auto;">
        <TaskView/>
      </div>

      <!-- Inbox -->
      <div v-if="currenStatus=='inbox'" class="bg-white p-8 rounded-lg shadow-xl" style="width: 40vw; height: 70vh; overflow: auto;" >
        <InboxView @closePopUp="handleClosePopUp" />
      </div>
    </div>
    <FABGroup :status="'nonactive'" @update="handleUpdate"></FABGroup>
  </div>
</template>

<script>
import FABGroup from '../components/FABGroup.vue'
import Group from '../assets/group.svg'
import Search from '../assets/search.svg'
import BackArrow from '../assets/back-arrow.svg'
import CloseBlack from '../assets/close-black.svg'
import InboxView from '../components/InboxView.vue'
import TaskView from '../components/TaskView.vue'
export default {
  components: {
    FABGroup,
    InboxView,
    TaskView
  },
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
    CloseBlack () {
      return CloseBlack
    }
  },
  data () {
    return {
      currenStatus: 'nonactive',
      currenView: 'nonactive'
    }
  },

  methods: {
    handleUpdate (newData) {
      this.currenStatus = newData
    },
    handleClosePopUp () {
      this.currenStatus = 'nonactive'
      // this.$emit('update', data)
    }
  }
}

// export default {
//   name: 'Dashboard',
//   components: {
//     PopupWindow, DashboardMain
//   },
//   computed: {

//     Search () {
//       return Search
//     }
//   }
// }
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
