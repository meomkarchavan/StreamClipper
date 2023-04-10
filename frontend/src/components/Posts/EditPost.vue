<template>
    <div>
        <!-- <transition name="post-appear-animation" enter-active-class="animated flipInX"> -->
        <div>
            <header v-if="post.title">
                <h1 class="card-title">{{ post.title }}</h1>
                <hr>
            </header>
            <form name="editPostForm" class="card card-block" @submit.prevent="handleSubmit" v-if="post">

                <!-- <transition name="post-message-animation" enter-active-class="animated flipInX"
                leave-active-class="animated flipOutX"> -->
                <div v-if="message">
                    <div class="alert" :class="{ 'alert-success': message.type === 'success' }" role="alert">
                        {{ message.text }}
                    </div>
                </div>
                <!-- </transition> -->

                <!-- <transition name="error-animation" enter-active-class="animated flipInX"
                        leave-active-class="animated flipOutX"> -->
                <div v-if="errors.any()" v-for="error in errors.errors" class="alert alert-danger" role="alert">
                    <strong>Doh!</strong> {{ error.msg }}
                </div>
                <!-- </transition> -->

                <div class="form-group row" :class="{ 'has-danger': errors.has('title') }">
                    <label for="title" class="col-2 col-form-label">Title</label>
                    <div class="col-10">
                        <input id="title" name="title" type="text" class="form-control" data-vv-rules="required"
                            data-vv-as="Post title" v-model="post.title" v-validate>
                    </div>
                </div>

                <div class="form-group row" :class="{ 'has-danger': errors.has('body') }">
                    <label for="body" class="col-2 col-form-label">Body</label>
                    <div class="col-10">
                        <textarea id="body" name="body" rows="5" class="form-control" data-vv-rules="required"
                            data-vv-as="Post body" v-model="post.body" v-validate></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-2"></div>
                    <div class="col-10">
                        <button type="submit" class="btn btn-primary" :disabled="errors.any() || !isDirty">
                            <i class="fa fa-floppy-o"></i> Save
                        </button>
                    </div>
                </div>

            </form>
            <hr>
            <router-link to="/posts">
                <i class="fa fa-chevron-left"></i> Back to posts
            </router-link>
        </div>
        <!-- </transition> -->
    </div>
</template>

<script>


import { postsResource } from 'src/util/resources';
export default {
    data() {
        return {
            post: {},
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
        this.fetchPost();
    },

    methods: {
        handleSubmit() {
            this.$validator.validateAll().then((success) => {
                if (success) {
                    return this.savePost();
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

        savePost() {
            return postsResource.put(`${this.id}`, this.post)
                .then((response) => {
                    this.post = response.data;

                    this.showMessage({
                        type: 'success',
                        text: 'Post updated!'
                    });

                    // TODO: We need to reset the form after success....
                    // this.fields.reset();
                })
                .catch((errorResponse) => {
                    // Handle error...
                    this.showMessage({
                        type: 'danger',
                        text: errorResponse
                    });
                    console.log('API responded with:', errorResponse);
                });
        },

        fetchPost() {
            return postsResource.get(`${this.id}`)
                .then((response) => {
                    this.post = response.data;
                })
                .catch((errorResponse) => {
                    // Handle error...
                    console.log('API responded with:', errorResponse);
                });
        }
    }
}
</script>

<style lang="scss" scoped></style>