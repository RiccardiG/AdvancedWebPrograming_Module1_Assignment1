<script setup>

</script>

<template>
    <section>
        <div style="background: rgba(0,0,0, 0.05)" class="centerText">
            <br><br><br>
            <div class="waviy welcome">
                <span style="--i:1">E</span>
                <span style="--i:2">F</span>
                <span style="--i:3">R</span>
                <span style="--i:4">'</span>
                <span style="--i:5">É</span>
                <span style="--i:6">C</span>
                <span style="--i:7">O</span>
                <span style="--i:8">U</span>
                <span style="--i:9">T</span>
                <span style="--i:10">E</span>
                <span style="--i:11">!</span>
            <br><br><br>
            </div>
        </div>
    </section>

    <div>
        <div class="title text-center">
            <br><br>
            <h2>READ ME</h2>
            <p>For the final assignement of web development we were asked to build a project implementing the notions studied in class. Those were:</p>
            <li>HTML/CSS</li>
            <li>Java Script</li>
            <li>Node & Express</li>
            <li>Postgres & Knex</li>
            <li>Vue</li>
            <br><p>Our database is fully functional and migrations are available to re-create and populate them. Make sure to edit the knexfile.js file to add your own database name & credentials to access it.</p>
            <p>However, we didn't manage to link the front-end in vue to our backend. Therefore, we decided to build 2 different websites:</p>
            <li>The Front website that relies on vue (here)</li>
            <li>A HTML/CSS website to apply the CRUD to the database.</li>
            <br><p>All the data linked to this vue front end website is static and not linked to the database in any way or form.</p>
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