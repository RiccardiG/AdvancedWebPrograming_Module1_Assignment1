<script setup>
import { ref } from 'vue'
import artistData from '../data/genre.json'
const artist = ref(artistData)

const removeMember = (genreID) => {
    let tutoIndex = artist.value.findIndex(t => t.genreID === genreID);
    artist.value.splice(tutoIndex, 1);
};
</script>

<template>
    <br><br>
    <h2>List of all genres :</h2>
    <div class="container">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th> ID</th>
					<th> Name</th>
					<th> Description</th>
                    <th> Actions</th>
				</tr>
			</thead>
			<tr v-for="item in artist">
				<td>{{item.genreID}}</td>
				<td>{{item.genreName}}</td>
                <td>{{item.genreDescription}}</td>
                <td>
                    <button class="btn btn-danger" @click="removeMember(item.genreID)">Delete</button>
                </td>
			</tr>
		</table>
	</div>


    <div class="container">
		<br><br>
                <label><strong>Add new Genre to database </strong></label>
            </div>
            <div class="card-body">
                <br>
                <div class="row">
                    <div class="col-2"> Id : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="genre id" />
                    </div>
                </div>
                <br><br>
				<div class="row">
                    <div class="col-2"> Name : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="genre name" />
                    </div>
                </div>
				<br><br>
                <div class="row">
                    <div class="col-2"> Description : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="genre description" />
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-2"> Genre top hit ID : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="genre Top Hit id" />
                    </div>
                </div>
				<br><br>
                <div class="row">
                    <div class="col-2"> Genre top artist ID : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="genre top artist ID" />
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