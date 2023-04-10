<template>
    <div>
        <div v-if="tag.title">
            <div class="card card-block">
                <h1 class="card-title">{{ tag.title }}</h1>
            </div>
            <hr>
            <router-link class="" to="/tags">
                <i class="fa fa-chevron-left"></i> Back to tags
            </router-link>
            <button class="btn btn-outline-danger float-right m-2" @click="deleteTag">Delete</button>
            <router-link class="btn btn-outline-info float-right m-2" :to="{ name: 'editTag', params: { id: tag.id } }">
                <i class="fa fa-pencil"></i> Edit
            </router-link>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            tag: {}
        };
    },

    created() {
        this.fetchTag();
    },

    methods: {
        async fetchTag() {
            const id = this.$route.params.id;
            this.tag = await this.$pb.collection('tags').getOne(id)
        },
        async deleteTag() {
            const id = this.$route.params.id;
            await this.$pb.collection('tags').delete(id)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ path: '/tags' })
                    // this.tag = response;
                    // this.showMessage({
                    //     type: 'success',
                    //     text: 'Tag updated!'
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