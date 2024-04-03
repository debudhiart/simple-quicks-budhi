<template>
  <div :class="['chat-bubble', isSentByUser ? 'sent' : 'received']">
    <template v-if="messageType === 'text'">
      <p class="text-sm">{{ message }}</p>
    </template>
    <template v-else-if="messageType === 'image'">
      <img :src="message" alt="Image" class="max-w-xs rounded-lg" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    isSentByUser: {
      type: Boolean,
      default: false
    },
    messageType: {
      type: String,
      default: 'text',
      validator: value => ['text', 'image'].includes(value)
    }
  }
};
</script>

<style scoped>
.chat-bubble {
  max-width: 70%;
  margin: 0.5rem;
  padding: 0.8rem;
  border-radius: 10px;
}

.sent {
  align-self: flex-end;
  background-color: #dcf8c6;
}

.received {
  align-self: flex-start;
  background-color: #eaeaea;
}

img {
  max-width: 100%;
  border-radius: 8px;
}
</style>