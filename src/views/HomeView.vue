<script setup>

</script>

<template>
    <section>
        <div style="background: rgba(0,0,0, 0.05)" class="centerText">
            <br><br><br>
            <div class="waviy welcome">
                <span style="--i:1">W</span>
                <span style="--i:2">e</span>
                <span style="--i:3">l</span>
                <span style="--i:4">c</span>
                <span style="--i:5">o</span>
                <span style="--i:6">m</span>
                <span style="--i:7">e</span>
                <span style="--i:8">!</span>
            <br><br><br>
            </div>
        </div>
    </section>

    <div>
        <div class="title text-center">
            <br><br>
            <h2>Title</h2>
        </div>
    </div>

</template>

<style scoped>
.centerText {
    text-align: center;
}

.waviy {
    position: relative;
}

.waviy span {
    position: relative;
    display: inline-block;
    font-size: 70px;
    text-transform: uppercase;
    animation: flip 2s infinite;
    animation-delay: calc(.2s * var(--i))
}

@keyframes flip {
    0%,
    80% {
        transform: rotateY(360deg)
    }
}
</style>