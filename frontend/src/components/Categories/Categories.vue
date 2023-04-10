<template>
    <div v-show="categories.length" class="mb-4">
        <h1 class="mb-4"><i class="fa fa-list"></i> Categories</h1>
        <div class="form-group">
            <input class="form-control" placeholder="Filter categories..." v-model="categoriesFilter">

            <router-link v-if="filteredCategories.length" class="list-group-item"
                v-for="(category, index) in filteredCategories" :key="index" :data-index="index"
                :to="{ name: 'category', params: { id: category.id } }">
                <!-- {{ category }} -->
                #{{ index + 1 }} {{ category.title }}
            </router-link>

        </div>
        <router-link class="btn btn-outline-info float-right m-2" :to="{ name: 'createCategory' }">
            <i class="fa fa-pencil"></i> Add Category
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categoriesFilter: '',
            categories: []
        };
    },
    computed: {
        filteredCategories() {
            return this.categories.filter((category) => {
                // console.log(category)
                return category.title.toLowerCase().indexOf(this.categoriesFilter.toLowerCase()) !== -1
            });
        }
    },
    created() {
        this.fetchCategories();
    },
    methods: {
        async fetchCategories() {
            // you can also fetch all records at once via getFullList
            this.categories = await this.$pb.collection('categories').getFullList({
                sort: '-created',
            });
        }
    }
}
</script>

<style lang="scss" scoped></style>