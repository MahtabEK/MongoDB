var myMapper = function(){
	for (var obj = 0; obj < this.entities.hashtags.length; obj++){
		var key = this.entities.hashtags[obj].text;
		emit(key, 1);
	}
};

var myReducer = function(key, values){
	return Array.sum(values);
};

db.tweets.mapReduce(myMapper, myReducer, { query:{}, out: "mroutput" })
db.mroutput.aggregate({$sort: {value: -1}})

