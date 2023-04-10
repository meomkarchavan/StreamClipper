<template>
    <div>
        <div>
            <input type="text" v-model="videoUrl" placeholder="Enter YouTube video URL">
            <button @click="getVideoDetails">Get Video Details</button>
        </div>
        <div v-if="videoDetails">
            <h2>{{ videoDetails.title }}</h2>
            <p>{{ videoDetails.description }}</p>
            <p>Duration: {{ videoDetails.duration }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            videoUrl: '',
            videoDetails: null,
            player: null,
            YT: null,
        }
    },
    mounted() {

    },
    methods: {
        getVideoDetails() {
            const videoId = this.getVideoIdFromUrl(this.videoUrl)
            if (!videoId) {
                return
            }

            // Load the YouTube video
            this.player.loadVideoById(videoId)

            // Get the video details once the video is ready
            this.player.addEventListener('onStateChange', (event) => {
                if (event.data === this.YT.PlayerState.PLAYING) {
                    const duration = this.player.getDuration()
                    const videoDetails = {
                        title: this.player.getVideoData().title,
                        description: this.player.getVideoData().description,
                        duration: this.formatTime(duration),
                    }
                    this.videoDetails = videoDetails
                }
            })
        },
        getVideoIdFromUrl(url) {
            const match = url.match(/[?&]v=([^&]*)/)
            return match ? match[1] : null
        },
        formatTime(time) {
            const hours = Math.floor(time / 3600)
            const minutes = Math.floor((time - hours * 3600) / 60)
            const seconds = Math.floor(time - hours * 3600 - minutes * 60)
            return `${hours > 0 ? hours + ':' : ''}${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        },
    },
}
</script>
  