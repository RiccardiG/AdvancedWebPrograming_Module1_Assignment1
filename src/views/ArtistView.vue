<script setup>
import { ref } from 'vue'
import artistData from '../data/artist.json'
const artist = ref(artistData)

const removeMember = (artistName) => {
    let tutoIndex = artist.value.findIndex(t => t.artistName === artistName);
    artist.value.splice(tutoIndex, 1);
};
</script>

<template>
    <br><br>
    <h2>List of all artist :</h2>
    <div class="container">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th> ID</th>
					<th> Name</th>
					<th> Label</th>
					<th> Descritpion</th>
					<th> Number of streamings</th>
                    <th> Actions</th>
				</tr>
			</thead>
			<tr v-for="item in artist">
				<td>{{item.artistID}}</td>
				<td>{{item.artistName}}</td>
                <td>{{item.artistLabels}}</td>
                <td>{{item.artistDescription}}</td>
                <td>{{item.artistNumStreamings}}</td>
                <td>
                    <button class="btn btn-primary" @click="changePerm(item)">Edit</button>
                    <button class="btn btn-danger" @click="removeMember(item.artistName)">Delete</button>
                </td>
			</tr>
		</table>
	</div>
</template>