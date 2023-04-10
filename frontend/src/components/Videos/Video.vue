<template>
    <div>
        <div v-if="video.title">
            <div class="card card-block">
                <h1 class="card-title">{{ video.title }}</h1>

                <div class="form-group row">
                    <label for="youtube_title" class="col-2 col-form-label">Youtube Title</label>
                    <div class="col-10">
                        <input id="youtube_title" name="youtube_title" type="text" class="form-control"
                            v-model="video.youtube_title" :disabled="true">
                    </div>
                </div>
                <div class="form-group row" :class="{ 'has-danger': errors.has('url') }">
                    <label for="url" class="col-2 col-form-label">url</label>
                    <div class="col-10">
                        <input id="url" name="url" type="text" class="form-control" v-model="this.video.url"
                            :disabled="true">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="duration" class="col-2 col-form-label">Duration</label>
                    <div class="col-10">
                        <input id="duration" name="duration" type="text" class="form-control" v-model="this.duration"
                            :disabled="true">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="category" class="col-2 col-form-label">Category</label>
                    <div class="col-10">
                        <input id="category" name="category" type="text" class="form-control" v-model="this.category.title"
                            :disabled="true">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="description" class="col-2 col-form-label">Description</label>
                    <div class="col-10">
                        <textarea id="description" name="description" type="text" class="form-control"
                            v-model="video.description" :disabled="true" />
                    </div>
                </div>
            </div>
            <hr>
            <router-link class="" to="/videos">
                <i class="fa fa-chevron-left"></i> Back to videos
            </router-link>
            <button class="btn btn-outline-danger float-right m-2" @click="deleteVideo">Delete</button>
            <router-link class="btn btn-outline-info float-right m-2" :to="{ name: 'editVideo', params: { id: video.id } }">
                <i class="fa fa-pencil"></i> Edit
            </router-link>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            video: {},
            duration: null,
            category: {}
        };
    },

    created() {
        this.fetchVideo();
    },

    methods: {
        async fetchVideo() {
            const id = this.$route.params.id;
            this.video = await this.$pb.collection('videos').getOne(id)
            this.category = this.fetchCategory(this.video.category)
            this.duration = this.formatTime(this.video.duration)
        },
        async deleteVideo() {
            const id = this.$route.params.id;
            await this.$pb.collection('videos').delete(id)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ path: '/videos' })
                    // this.video = response;
                    // this.showMessage({
                    //     type: 'success',
                    //     text: 'Video updated!'
                    // });
                }).catch((errorResponse) => {
                    console.log(errorResponse);
                    // Handle error...
                    this.showMessage({
                        type: 'danger',
                        text: errorResponse.response.message
                    });
                    console.log('API responded with:', errorResponse.response.message);
                });

        },
        formatTime(time) {
            const hours = Math.floor(time / 3600)
            const minutes = Math.floor((time - hours * 3600) / 60)
            const seconds = Math.floor(time - hours * 3600 - minutes * 60)
            return `${hours > 0 ? hours + ':' : ''}${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        },
        async fetchCategory(id) {
            this.category = await this.$pb.collection('categories').getOne(id)
        },
    }
}
</script>

<style lang="scss" scoped></style>