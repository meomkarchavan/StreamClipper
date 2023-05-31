<template>
  <div>
    <button @click="openModal">Open Preview</button>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <preview :video-id="videoId" :start-time="startTime" :end-time="endTime" />
      </div>
    </div>
  </div>
</template>

<script>
import Preview from '../Preview/Preview.vue';

export default {
  components: {
    Preview,
  },
  data() {
    return {
      isModalOpen: false,
      videoId: '9PDPNOb8Gig',
      startTime: 5,
      endTime: 8,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  display: block;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 800px;
  position: relative;
}

.close {
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: black;
}
</style>
