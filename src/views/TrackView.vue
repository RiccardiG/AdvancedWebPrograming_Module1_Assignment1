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
                    <button class="btn btn-danger" @click="removeMember(item.trackID)">Delete</button>
                </td>
			</tr>
		</table>
	</div>

    <div class="container">
		<br><br>
                <label><strong>Add new Track to database </strong></label>
            </div>
            <div class="card-body">
                <br>
                <div class="row">
                    <div class="col-2"> Id : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="track id" />
                    </div>
                </div>
                <br><br>
				<div class="row">
                    <div class="col-2"> Name : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="track name" />
                    </div>
                </div>
				<br><br>
                <div class="row">
                    <div class="col-2"> Genre : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="album tracks number" />
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-2"> Track Release date : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="track release date" />
                    </div>
                </div>
				<br><br>
                <div class="row">
                    <div class="col-2"> Track Streamings : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="track number of streamings" />
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-2"> Track artist ID : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="track artist ID" />
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-2"> Track album ID : </div>
                    <div class="col">
                        <input type="text" v-model="newItem" placeholder="track album ID" />
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