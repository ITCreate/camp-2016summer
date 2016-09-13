$(function(){
	var vm = new Vue({
		el: '#app',
		data: {
			photos:[],
			viewNum: 10,
			displayNum: 9,
			nowView: 0,
			selectImage: null
		},
		ready: function(){
			var folderId = "0B4ZiWZMCdy8lOUJXbmo5c2NMdTg";
			var url = 'https://script.google.com/macros/s/AKfycbxQ3JNihxE2kHRZS3EXCZ4P28t2DWxeXGuMs6Bfg10/dev?id=' + folderId;
			var self = this;
			$.ajax({
				url: url,
				dataType: 'jsonp', // 追加
				type: "GET",
				success: function(res) {
					self.$set('photos',res);					
				},
				error: function(a,b,c){
					console.log(a);
					console.log(b);
					console.log(c);
				}
			});
		},
		computed: {
			filterPhotos: function(){
				return this.photos.slice(this.nowView * this.displayNum, this.nowView * this.displayNum + this.displayNum);
			},
			isNext: function(){
				return this.nowView +1  > this.maxPages;
			},
			isPrev: function(){
				return this.nowView -　1  < 0;
			},
			maxPages: function(){
				return Math.floor(this.photos.length / this.displayNum) + 1;
			}
		}
	});
});

