<script setup>
import { ref } from 'vue'
import trackData from '../data/track.json'
const artist = ref(trackData)

const removeMember = (trackID) => {
    let tutoIndex = artist.value.findIndex(t => t.trackID === trackID);
    artist.value.splice(tutoIndex, 1);
};
</script>

<template>
    <br><br>
    <h2>List of all tracks :</h2>
    <div class="container">
		<table class="table table-bordered">
			<thead>
				<tr>
                    <th> Id</th>
					<th> Name</th>
					<th> Genre</th>
					<th> Date</th>
					<th> Number of streamings</th>
                    <th> Actions</th>
				</tr>
			</thead>
			<tr v-for="item in artist">
				<td>{{item.trackID}}</td>
                <td>{{item.trackName}}</td>
                <td>{{item.trackGenre}}</td>
                <td>{{item.trackReleaseDate}}</td>
                <td>{{item.trackNumStreamings}}</td>

                <td>
                    <button class="btn btn-primary" @click="changePerm(item)">Edit</button>
                    <button class="btn btn-danger" @click="removeMember(item.trackID)">Delete</button>
                </td>
			</tr>
		</table>
	</div>
</template>