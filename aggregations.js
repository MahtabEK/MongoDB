db.tweets.aggregate([{"$group" : {_id:"$user.id", count:{$sum:1}}}, {$sort:{"count":-1}}])


db.tweets.aggregate([{"$group" : {_id:"$place.name", count:{$sum:1}}}, {$sort:{"count":-1}}])


db.tweets.aggregate([{"$group" : {_id:"$in_reply_to_user_id", count:{$sum:1}}}, {$sort:{"count":-1}}])


db.tweets.aggregate([{"$group" : {_id:"$user.id", count:{$sum: {"$size": "$entities.hashtags"}}}}, {$sort:{"count":-1}}])




