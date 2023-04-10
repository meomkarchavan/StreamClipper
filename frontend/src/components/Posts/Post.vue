<template>
    <div>
        <!-- <transition name="post-appear-animation" enter-active-class="animated flipInX"> -->
        <div v-if="post.title">
            <div class="card card-block">
                <h1 class="card-title">{{ post.title }}</h1>
                <p class="card-text">{{ post.body }}</p>
            </div>
            <hr>
            <router-link class="" to="/posts">
                <i class="fa fa-chevron-left"></i> Back to posts
            </router-link>
            <router-link class="btn btn-outline-info float-right" :to="{ name: 'editPost', params: { id: post.id } }">
                <i class="fa fa-pencil"></i> Edit
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
            post: {}
        };
    },

    created() {
        this.fetchPost();
    },

    methods: {
        fetchPost() {
            const id = this.$route.params.id;

            return postsResource.get(`${id}`)
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