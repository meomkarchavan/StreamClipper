<template>
    <div class="playlist">
        <!-- this is the div where the IFrame API will inject the iframe content into -->
        <div id="video"></div>


        <button @click="getStart">GetStart</button>
        {{ startTime }}
        <br>
        <button @click="getEnd">GetEnd</button>
        {{ endTime }}

    </div>
</template>
<script>
export default {
    data() {
        return {
            startTime: "none",
            endTime: "none",
            player: null
        }
    },
    mounted() {
        window.onYouTubeIframeAPIReady = this.initPlayer
    },
    methods: {
        initPlayer() {
            const _ = this;
            const videoEl = document.getElementById("video")
            this.player = new YT.Player(videoEl, {
                width: 600,
                height: 400,
                videoId: 'Xa0Q0J5tOP0',
                playerVars: {},
                events: {
                    onReady: _.onInitialize(),
                    onStateChange: _.onPlayerStateChange()
                }
            });
            console.log('sas')
        },
        getStart() {
            this.startTime = this.player.getCurrentTime()
        },
        getEnd() {
            this.endTime = this.player.getCurrentTime()
        },
        onPlayerStateChange() {
            console.log("onPlayerStateChange")
            // setInterval(function () {
            //     console.log(evt);
            //     var currentTime = evt.target.getCurrentTime();
            //     console.log(currentTime);
            // }, 1000);
        },
        onInitialize() { console.log("Initialized") }
    }
}
</script>