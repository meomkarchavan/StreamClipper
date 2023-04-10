<template>
    <div v-show="clips.length" class="mb-4">
        <h1 class="mb-4"><i class="fa fa-video-camera"></i> Clips</h1>
        <div class="form-group">
            <input class="form-control" placeholder="Filter clips..." v-model="clipsFilter">

            <router-link v-if="filteredClips.length" class="list-group-item" v-for="(clip, index) in filteredClips"
                :key="index" :data-index="index" :to="{ name: 'clip', params: { id: clip.id } }">
                <!-- {{ clip }} -->
                #{{ index + 1 }} {{ clip.title }}
            </router-link>

        </div>
        <router-link class="btn btn-outline-info float-right m-2" :to="{ name: 'createClip' }">
            <i class="fa fa-pencil"></i> Add Clip
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clipsFilter: '',
            clips: []
        };
    },
    computed: {
        filteredClips() {
            return this.clips.filter((clip) => {
                // console.log(clip)
                return clip.title.toLowerCase().indexOf(this.clipsFilter.toLowerCase()) !== -1
            });
        }
    },
    created() {
        this.fetchClips();
    },
    methods: {
        async fetchClips() {
            // you can also fetch all records at once via getFullList
            this.clips = await this.$pb.collection('clips').getFullList({
                sort: '-created',
            });
        }
    }
}
</script>

<style lang="scss" scoped></style>