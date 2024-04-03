<template>
  <div class="fixed bottom-4 right-4">
    <div class="flex flex-row-reverse justify-end gap-2">
      <div>
        <p style="color: #F2F2F2;" class="invisible">-</p>
        <FloatingActionButton :class="(isActive == 'active' || isActive == 'nonactive') ? 'bg-custom-blue !fill-custom-white' : MainColor" @click="closeAction">
          <!-- <img :src="MainIcon" alt="Close Icon" /> -->
          <component :is="MainIcon" />
        </FloatingActionButton>
      </div>
      <template v-if="isActive === 'active'">
        <div>
          <p style="color: #F2F2F2;">Task</p>
          <FloatingActionButton class="!bg-white" @click="changeStatus('task')">
            <!-- <img :src="Task" alt="Task Icon" /> -->
            <Task/>
          </FloatingActionButton>
        </div>
        <div>
          <p style="color: #F2F2F2;">Inbox</p>
          <FloatingActionButton class="!bg-white" @click="changeStatus('inbox')">
            <!-- <img :src="Inbox" alt="Inbox Icon" /> -->
            <Inbox/>
          </FloatingActionButton>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import FloatingActionButton from '../components/FloatingActionButton.vue'
import Inbox from '../components/icons/Inbox.vue'
import Task from '../components/icons/Task.vue'
import Thunder from '../components/icons/Thunder.vue'
import Close from '../components/icons/Close.vue'

export default {
  components: {
    FloatingActionButton, Close, Inbox, Task, Thunder
  },
  props: {
    status: {
      type: String,
      required: true,
      default: 'nonactive'
    }
  },
  data () {
    return {
      isActive: 'nonactive'
    }
  },
  mounted () {
    this.isActive = this.status
  },
  methods: {
    closeAction () {
      if (this.isActive === 'nonactive') {
        this.isActive = 'active'
      } else if (this.isActive === 'active') {
        this.isActive = 'nonactive'
      } else {
        this.isActive = 'nonactive'
      }
      this.$emit('update', this.isActive)
    },
    changeStatus (data) {
      this.isActive = data
      this.$emit('update', data)
      console.log(data)
    }
  },
  computed: {
    Close () {
      return Close
    },
    Inbox () {
      return Inbox
    },
    Task () {
      return Task
    },
    Thunder () {
      return Thunder
    },
    MainIcon () {
      if (this.isActive !== 'task' && this.isActive !== 'inbox') {
        return Thunder
      } else if (this.isActive === 'task') {
        return Task
      } else if (this.isActive === 'inbox') {
        return Inbox
      }
      return Close
    },
    MainColor () {
      if (this.isActive !== 'task' && this.isActive !== 'inbox') {
        return '!bg-custom-blue !fill-custom-white'
      } else if (this.isActive === 'task') {
        return '!bg-custom-yellow !fill-custom-white'
      } else if (this.isActive === 'inbox') {
        return '!bg-custom-purple !fill-custom-white'
      }
      return '!bg-custom-blue !fill-custom-white'
    }
  }
}
</script>

<style scoped>
</style>
