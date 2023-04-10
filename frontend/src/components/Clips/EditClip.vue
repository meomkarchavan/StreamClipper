<template>
    <div>
        <div>
            <header v-if="clip.title">
                <h1 class="card-title">{{ clip.title }}</h1>
                <hr>
            </header>
            <form name="editClipForm" class="card card-block" @submit.prevent="handleSubmit" v-if="clip">

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
                            data-vv-as="Clip title" v-model="clip.title" v-validate>
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
            <router-link to="/clips">
                <i class="fa fa-chevron-left"></i> Back to Clips
            </router-link>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            clip: {},
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
        this.fetchClip();
    },

    methods: {
        handleSubmit() {
            this.$validator.validateAll().then((success) => {
                if (success) {
                    return this.saveClip();
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

        async saveClip() {
            // const record = await this.$pb.collection('clips').update(this.id, this.clip);

            await this.$pb.collection('clips').update(this.id, this.clip)
                .then((response) => {
                    this.clip = response;

                    this.showMessage({
                        type: 'success',
                        text: 'Clip updated!'
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

        async fetchClip() {
            const id = this.$route.params.id;
            this.clip = await this.$pb.collection('clips').getOne(id)
        }
    }
}
</script>

<style lang="scss" scoped></style>