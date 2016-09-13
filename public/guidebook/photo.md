# 写真
※読み込みに時間がかかる場合があります
<div id="app">
	<div class="buttons">
		<button v-on:click="nowView = nowView-1"　v-bind:disabled='isPrev'>Prev</button>
		{{ nowView+1 }}/{{ maxPages }}
		<button v-on:click="nowView = nowView+1" v-bind:disabled='isNext'>Next</button>
	</div>
	<div id="photos">
		<div class="photo" v-for="photo in filterPhotos">
			<img :src="photo" v-on:click="selectImage = photo">
		</div>
	</div>
	<div class="buttons">
		<button v-on:click="nowView = nowView-1"　v-bind:disabled='isPrev'>Prev</button>
		{{ nowView+1 }}/{{ maxPages }}
		<button v-on:click="nowView = nowView+1" v-bind:disabled='isNext'>Next</button>
	</div>
	<div class="overlay" v-show="selectImage" v-on:click="selectImage = null">
		<div>
			<img :src="selectImage">
		</div>
	</div>
</div>
