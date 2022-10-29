<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">EFR'ÉCOUTE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="../../old_index.html">Back End CRUD Verifier</a>
      </li>
      <li class="nav-item active">
        <RouterLink class="nav-link" href="#" to="/home">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" href="#" to="/artist">Artist</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" href="#" to="/album">Albums</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" href="#" to="/track">Track</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" href="#" to="/genre">Genre</RouterLink>
      </li>
    </ul>
  </div>
</nav>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

</template>

<style>

</style>