db.tweets.find({"in_reply_to_screen_name": "globeandmail"}).pretty()

db.tweets.find({"user.screen_name": "MLHealthUnit"}).pretty()
