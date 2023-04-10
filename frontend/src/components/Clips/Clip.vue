<template>
    <div>
        <div v-if="clip.title">
            <div class="card card-block">
                <h1 class="card-title">{{ clip.title }}</h1>
            </div>
            <hr>
            <router-link class="" to="/clips">
                <i class="fa fa-chevron-left"></i> Back to clips
            </router-link>
            <button class="btn btn-outline-danger float-right m-2" @click="deleteClip">Delete</button>
            <router-link class="btn btn-outline-info float-right m-2" :to="{ name: 'editClip', params: { id: clip.id } }">
                <i class="fa fa-pencil"></i> Edit
            </router-link>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            clip: {}
        };
    },

    created() {
        this.fetchClip();
    },

    methods: {
        async fetchClip() {
            const id = this.$route.params.id;
            this.clip = await this.$pb.collection('clips').getOne(id)
        },
        async deleteClip() {
            const id = this.$route.params.id;
            await this.$pb.collection('clips').delete(id)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ path: '/clips' })
                    // this.clip = response;
                    // this.showMessage({
                    //     type: 'success',
                    //     text: 'Clip updated!'
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