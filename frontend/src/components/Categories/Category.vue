<template>
    <div>
        <!-- <transition name="category-appear-animation" enter-active-class="animated flipInX"> -->
        <div v-if="category.title">
            <div class="card card-block">
                <h1 class="card-title">{{ category.title }}</h1>
                <!-- <p class="card-text">{{ category.body }}</p> -->
            </div>
            <hr>
            <router-link class="" to="/categories">
                <i class="fa fa-chevron-left"></i> Back to categories
            </router-link>
            <button class="btn btn-outline-danger float-right m-2" @click="deleteCategory">Delete</button>
            <router-link class="btn btn-outline-info float-right m-2"
                :to="{ name: 'editCategory', params: { id: category.id } }">
                <i class="fa fa-pencil"></i> Edit
            </router-link>

        </div>
        <!-- </transition> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            category: {}
        };
    },

    created() {
        this.fetchCategory();
    },

    methods: {
        async fetchCategory() {
            const id = this.$route.params.id;
            this.category = await this.$pb.collection('categories').getOne(id)
        },
        async deleteCategory() {
            const id = this.$route.params.id;
            await this.$pb.collection('categories').delete(id)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ path: '/categories' })
                    // this.category = response;
                    // this.showMessage({
                    //     type: 'success',
                    //     text: 'Category updated!'
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

        }
    }
}
</script>

<style lang="scss" scoped></style>