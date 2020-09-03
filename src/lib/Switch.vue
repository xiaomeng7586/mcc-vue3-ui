<template>
    <div class="swicth">
        <button><span></span></button>
    </div>
</template>

<style lang="scss" scoped>
$h:22px;
$h2:$h - 4px;
.swicth {
    height: $h;
    width: $h*2;
    button {
        height: $h;
        width: $h*2;
        border: none;
        background: #409eff;
        border-radius: $h/2;
        position: relative;
        outline: none;
        span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: #fff;
            border-radius: $h2 / 2;
        }
    }
    
}
button:hover span {
    left: calc(100% - #{$h2} -2px);
}
</style>