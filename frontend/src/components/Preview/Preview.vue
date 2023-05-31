<template>
  <div class="youtube-preview">
    <iframe
      :src="embedUrl"
      width="560"
      height="315"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
    startTime: {
      type: Number,
      default: 0,
    },
    endTime: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    embedUrl() {
      let url = `https://www.youtube.com/embed/${this.videoId}`;
      url += `?vq=tiny&mute=1&controls=0&disablekb=1&modestbranding=1&showinfo=0&rel=0`;
      if (this.startTime || this.endTime) {
        url += `&start=${this.startTime}&end=${this.endTime}`;
      }

      return url;
    },
  },
};
</script>

<style scoped>
.youtube-preview {
  position: relative;
}
</style>
