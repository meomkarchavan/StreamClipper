<template>
    <div v-show="videos.length" class="mb-4">
        <h1 class="mb-4"><i class="fa fa-youtube"></i> Videos</h1>
        <div class="form-group">
            <input class="form-control" placeholder="Filter videos..." v-model="tagsFilter">

            <router-link v-if="filteredVideos.length" class="list-group-item" v-for="(video, index) in filteredVideos"
                :key="index" :data-index="index" :to="{ name: 'video', params: { id: video.id } }">
                <!-- {{ video }} -->
                #{{ index + 1 }} {{ video.title }}
            </router-link>

        </div>
        <router-link class="btn btn-outline-info float-right m-2" :to="{ name: 'createVideo' }">
            <i class="fa fa-pencil"></i> Add Video
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tagsFilter: '',
            videos: []
        };
    },
    computed: {
        filteredVideos() {
            return this.videos.filter((video) => {
                // console.log(video)
                return video.title.toLowerCase().indexOf(this.tagsFilter.toLowerCase()) !== -1
            });
        }
    },
    created() {
        this.fetchVideos();
    },
    methods: {
        async fetchVideos() {
            // you can also fetch all records at once via getFullList
            this.videos = await this.$pb.collection('videos').getFullList({
                sort: '-created',
            });
        }
    }
}
</script>

<style lang="scss" scoped></style>