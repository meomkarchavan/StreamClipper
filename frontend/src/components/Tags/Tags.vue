<template>
    <div v-show="tags.length" class="mb-4">
        <h1 class="mb-4"><i class="fa fa-tags"></i> Tags</h1>
        <div class="form-group">
            <input class="form-control" placeholder="Filter tags..." v-model="tagsFilter">

            <router-link v-if="filteredTags.length" class="list-group-item" v-for="(tag, index) in filteredTags"
                :key="index" :data-index="index" :to="{ name: 'tag', params: { id: tag.id } }">
                <!-- {{ tag }} -->
                #{{ index + 1 }} {{ tag.title }}
            </router-link>

        </div>
        <router-link class="btn btn-outline-info float-right m-2" :to="{ name: 'createTag' }">
            <i class="fa fa-pencil"></i> Add Tag
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tagsFilter: '',
            tags: []
        };
    },
    computed: {
        filteredTags() {
            return this.tags.filter((tag) => {
                // console.log(tag)
                return tag.title.toLowerCase().indexOf(this.tagsFilter.toLowerCase()) !== -1
            });
        }
    },
    created() {
        this.fetchTags();
    },
    methods: {
        async fetchTags() {
            // you can also fetch all records at once via getFullList
            this.tags = await this.$pb.collection('tags').getFullList({
                sort: '-created',
            });
        }
    }
}
</script>

<style lang="scss" scoped></style>