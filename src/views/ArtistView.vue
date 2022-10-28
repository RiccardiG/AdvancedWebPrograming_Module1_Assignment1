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
					<th> Description</th>
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
                    <button class="btn btn-danger" @click="removeMember(item.artistName)">Delete</button>
                </td>
			</tr>
		</table>
	</div>

	<div class="container">
		<br><br>
                <label><strong>Add new artist to database </strong></label>
            </div>
            <div class="card-body">
                <br>
                <div class="row">
                    <div class="col-2"> Id : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="artist id" />
                    </div>
                </div>
                <br><br>
				<div class="row">
                    <div class="col-2"> Name : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="artist name" />
                    </div>
                </div>
				<br><br>
                <div class="row">
                    <div class="col-2"> Label : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="artist label" />
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-2"> Description : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="artist description" />
                    </div>
                </div>
				<br><br>
                <div class="row">
                    <div class="col-2"> Number of streamings : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="artist number of streamings" />
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