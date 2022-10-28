<script setup>
import { ref } from 'vue'
import artistData from '../data/album.json'
const artist = ref(artistData)

const removeMember = (albumID) => {
    let tutoIndex = artist.value.findIndex(t => t.albumID === albumID);
    artist.value.splice(tutoIndex, 1);
};
</script>

<template>
    <br><br>
    <h2>List of all albums :</h2>
    <div class="container">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th> ID</th>
					<th> Name</th>
					<th> Track</th>
					<th> Date</th>
					<th> Number of streamings</th>
                    <th> Actions</th>
				</tr>
			</thead>
			<tr v-for="item in artist">
				<td>{{item.albumID}}</td>
				<td>{{item.albumName}}</td>
                <td>{{item.numTracks}}</td>
                <td>{{item.albumReleaseDate}}</td>
                <td>{{item.albumNumStreamings}}</td>
                <td>
                    <button class="btn btn-danger" @click="removeMember(item.albumID)">Delete</button>
                </td>
			</tr>
		</table>
	</div>

    <div class="container">
		<br><br>
                <label><strong>Add new album to database </strong></label>
            </div>
            <div class="card-body">
                <br>
                <div class="row">
                    <div class="col-2"> Id : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="album id" />
                    </div>
                </div>
                <br><br>
				<div class="row">
                    <div class="col-2"> Name : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="album name" />
                    </div>
                </div>
				<br><br>
                <div class="row">
                    <div class="col-2"> Album tracks number : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="album tracks number" />
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-2"> Album Release date : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="album release date" />
                    </div>
                </div>
				<br><br>
                <div class="row">
                    <div class="col-2"> Album Streamings : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="album number of streamings" />
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-2"> Album artist ID : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="album artist ID" />
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col offset-1 ml-4">
                        <button class="btn btn-primary" @click="addItem">Add</button>
						<button class="btn btn-primary" @click="addItem">Update</button>
                    </div>
                    </div>
                    </div>
                
</template>