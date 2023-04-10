<template>
    <div>
        <div>
            <header v-if="tag.title">
                <h1 class="card-title">{{ tag.title }}</h1>
                <hr>
            </header>
            <form name="editTagForm" class="card card-block" @submit.prevent="handleSubmit" v-if="tag">

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
                            data-vv-as="Tag title" v-model="tag.title" v-validate>
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
            <router-link to="/tags">
                <i class="fa fa-chevron-left"></i> Back to Tags
            </router-link>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            tag: {},
            message: null
        };
    },

    computed: {
        isDirty() {
            return Object.keys(this.fields).some(key => this.fields[key].dirty);
        }
    },

    methods: {
        handleSubmit() {
            this.$validator.validateAll().then((success) => {
                if (success) {
                    return this.saveTag();
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

        async saveTag() {
            // const record = await this.$pb.collection('tags').update(this.id, this.tag);

            await this.$pb.collection('tags').create(this.tag)
                .then((response) => {
                    this.tag = response;

                    this.showMessage({
                        type: 'success',
                        text: 'Tag Saved!'
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
    }
}
</script>

<style lang="scss" scoped></style>