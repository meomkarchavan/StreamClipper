<template>
    <div>
        <div>
            <header v-if="video.title">
                <h1 class="card-title">{{ video.title }}</h1>
                <hr>
            </header>
            <form name="editVideoForm" class="card card-block" @submit.prevent="handleSubmit" v-if="video">

                <div v-if="message">
                    <div class="alert" :class="{ 'alert-success': message.type === 'success' }" role="alert">
                        {{ message.text }}
                    </div>
                </div>
                <div v-if="errors.any()" v-for="error in errors.errors" class="alert alert-danger" role="alert">
                    <strong>Doh!</strong> {{ error.msg }}
                </div>

                <div class="form-group row" :class="{ 'has-danger': errors.has('title') }">
                    <label for="title" class="col-2 col-form-label">Title</label>
                    <div class="col-10">
                        <input id="title" name="title" type="text" class="form-control" data-vv-rules="required"
                            data-vv-as="Video title" v-model="video.title" v-validate>
                    </div>
                </div>
                <div class="form-group row" :class="{ 'has-danger': errors.has('youtube_title') }">
                    <label for="youtube_title" class="col-2 col-form-label">Youtube Title</label>
                    <div class="col-10">
                        <input id="youtube_title" name="youtube_title" type="text" class="form-control"
                            data-vv-rules="required" data-vv-as="Youtube title" v-model="video.youtube_title" v-validate
                            :disabled="true">
                    </div>
                </div>
                <div class="form-group row" :class="{ 'has-danger': errors.has('url') }">
                    <label for="url" class="col-2 col-form-label">url</label>
                    <div class="col-10">
                        <input id="url" name="url" type="text" class="form-control" data-vv-rules="required"
                            data-vv-as="url" v-model="this.video.url" v-validate :disabled="true">
                    </div>
                </div>
                <div class="form-group row" :class="{ 'has-danger': errors.has('youtube_title') }">
                    <label for="duration" class="col-2 col-form-label">Duration</label>
                    <div class="col-10">
                        <input id="duration" name="duration" type="text" class="form-control" data-vv-rules="required"
                            data-vv-as="Duration" v-model="this.duration" v-validate :disabled="true">
                    </div>
                </div>
                <div class="form-group row" :class="{ 'has-danger': errors.has('youtube_title') }">
                    <label for="category" class="col-2 col-form-label">Category</label>
                    <div class="col-10">
                        <select class="custom-select" v-model="video.category">
                            <option v-for="category in categories" :value="category.id">
                                {{ category.title }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row" :class="{ 'has-danger': errors.has('youtube_title') }">
                    <label for="description" class="col-2 col-form-label">Description</label>
                    <div class="col-10">
                        <textarea id="description" name="description" type="text" class="form-control"
                            data-vv-rules="required" data-vv-as="description" v-model="video.description" v-validate />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-2"></div>
                    <div class="col-10">
                        <button type="submit" class="btn btn-primary" :disabled="errors.any()">
                            <i class="fa fa-floppy-o"></i> Save
                        </button>
                    </div>
                </div>

            </form>
            <hr>
            <router-link to="/videos">
                <i class="fa fa-chevron-left"></i> Back to Videos
            </router-link>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            video: {},
            categories: null,
            duration: null,
            message: null,
            id: this.$route.params.id,
        };
    },

    computed: {
        isDirty() {
            return Object.keys(this.fields).some(key => this.fields[key].dirty);
        }
    },

    created() {
        this.fetchVideo();
        this.fetchCategories();
    },

    methods: {
        handleSubmit() {
            this.$validator.validateAll().then((success) => {
                if (success) {
                    return this.saveVideo();
                }

                return this;
            });
        },

        showMessage(message = {}, timeout = 2000) {
            this.message = message;
            setTimeout(() => {
                this.message = null;
            }, timeout);
        },

        async saveVideo() {

            await this.$pb.collection('videos').update(this.id, this.video)
                .then((response) => {
                    this.video = response;

                    this.showMessage({
                        type: 'success',
                        text: 'Video updated!'
                    });
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

        async fetchVideo() {
            const id = this.$route.params.id;
            this.video = await this.$pb.collection('videos').getOne(id)
            this.duration = this.formatTime(this.video.duration)
        },
        async fetchCategories() {
            // you can also fetch all records at once via getFullList
            this.categories = await this.$pb.collection('categories').getFullList({
                sort: '-created',
            });
        },
        formatTime(time) {
            const hours = Math.floor(time / 3600)
            const minutes = Math.floor((time - hours * 3600) / 60)
            const seconds = Math.floor(time - hours * 3600 - minutes * 60)
            return `${hours > 0 ? hours + ':' : ''}${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        },
    }
}
</script>

<style lang="scss" scoped></style>