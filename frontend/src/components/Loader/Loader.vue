<template>
    <div class="loader"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$vue-green: #41b883;

.loader {
    font-size: 10px;
    position: absolute;
    z-index: 9999; // Above everything...
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -20px;
    text-indent: -9999em;
    border-top: 5px solid lighten($vue-green, 35%);
    border-right: 5px solid lighten($vue-green, 35%);
    border-bottom: 5px solid lighten($vue-green, 35%);
    border-left: 5px solid $vue-green;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: loaderSpinner 1.1s infinite linear;
    animation: loaderSpinner 1.1s infinite linear;

    &,
    &:after {
        border-radius: 50%;
        width: 40px;
        height: 40px
    }
}

@-webkit-keyframes loaderSpinner {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>