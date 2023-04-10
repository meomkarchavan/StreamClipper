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
                <router-link class="nav-item" tag="li" to="/categories" exact>
                    <a class="nav-link"><i class="fa fa-list"></i> Categories </a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/tags" exact>
                    <a class="nav-link"><i class="fa fa-tags"></i> Tags </a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/videos" exact>
                    <a class="nav-link"><i class="fa fa-youtube"></i> Videos </a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/clips" exact>
                    <a class="nav-link"><i class="fa fa-video-camera"></i> Clips </a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/test2" exact>
                    <a class="nav-link"><i class="fa fa-video-camera"></i> Test2 </a>
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