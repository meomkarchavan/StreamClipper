<template>
    <div v-show="posts.length" class="mb-4">
        <h1 class="mb-4"><i class="fa fa-file-text-o"></i> Posts</h1>

        <div class="form-group">
            <input class="form-control" placeholder="Filter posts..." v-model="postsFilter">
        </div>

        <!-- <transition-group tag="div" class="list-group" :css="false" @before-enter="handleBeforeEnter" @enter="handleEnter"> -->
        <router-link v-if="filteredPosts.length" class="list-group-item" v-for="(post, index) in filteredPosts" :key="index"
            :data-index="index" :to="{ name: 'post', params: { id: post.id } }">
            #{{ index + 1 }} {{ post.title }}
        </router-link>
        <!-- </transition-group> -->
    </div>
</template>

<script>
import { postsResource } from 'src/util/resources';

const animation = 'flipInX';
const animationDelay = 25; // in ms
export default {
    data() {
        return {
            postsFilter: '',
            posts: []
        };
    },

    computed: {
        filteredPosts() {
            return this.posts.filter((post) => post.title.toLowerCase().indexOf(this.postsFilter.toLowerCase()) !== -1);
        }
    },

    created() {
        this.fetchPosts();
    },

    methods: {
        fetchPosts() {
            return postsResource.get('/')
                .then((response) => {
                    this.posts = response.data;
                })
                .catch((errorResponse) => {
                    // Handle error...
                    console.log('API responded with:', errorResponse);
                });
        },

        // Methods for transitions
        handleBeforeEnter(el) {
            el.style.opacity = 0;
            el.classList.add('animated');
        },

        handleEnter(el) {
            const delay = el.dataset.index * animationDelay;
            setTimeout(() => {
                el.style.opacity = 1;
                el.classList.add(animation);
            }, delay);
        }
    }
}
</script>

<style lang="scss" scoped></style>