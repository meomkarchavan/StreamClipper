<template>
    <div>
        <nav class="navbar fixed-top navbar-toggleable-sm navbar-inverse bg-inverse">
            <router-link class="navbar-brand" to="/">
                <img alt="Brand" src="~assets/images/logo.png" height="20">
            </router-link>
            <ul class="navbar-nav">
                <router-link class="nav-item" tag="li" to="/" exact>
                    <a class="nav-link"><i class="fa fa-home"></i> Home</a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/posts" exact>
                    <a class="nav-link"><i class="fa fa-file-text-o"></i> Posts</a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/posts/create" exact>
                    <a class="nav-link"><i class="fa fa-pencil"></i> Create post</a>
                </router-link>
            </ul>
        </nav>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>