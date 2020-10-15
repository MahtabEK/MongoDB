# MongoDB
The goal of this project is to get experience with MongoDB, one of the most widely-used tools for the management and querying of big, unstructured data.

MongoDB uses the JSON (and related BSON) format for data.

The MongoDB shell provides an interactive JavaScript interface to MongoDB.

To install mongodb on your virtual machine, connect via SSH, and at the prompt run

- sudo yum remove -y mongodb-org

- sudo yum install -y mongodb-org

Then start your server with the following command. (This may take a minute or two.)

- sudo service mongod start

You can then import the twitter data, contained in the tweets.json file in your home directory, by typing

- curl https://www.csd.uwo.ca/~dlizotte/tweets.json -o tweets.json

- mongoimport --db test --collection tweets --file tweets.json

MongoDB organizes data into databases and collections. In this case, you will use the test database and the tweets collection of documents.

MongoDB uses its own shell that allows users to run queries. To start the shell, run the following command:

- mongo

Once you have started the shell, to access the test database, type

- use test

Having done so, you can now access the tweets collection. For example, to print an example tweet, type

db.tweets.findOne()

Have a look at the resulting JSON object.

MongoDB queries are written in JavaScript. They are in some ways analogous to SQL. The following tutorial has many examples:

https://docs.mongodb.com/v4.2/tutorial/query-documents/

The following reference page gives the different operators that can be used in queries:

https://docs.mongodb.com/v4.2/reference/operator/query/


If you find the output of your queries hard to read, you can append .pretty() to them to produce indented output.

**You can find a file called queries.js that contains a query for each of the folowwing questions:**

1) Retrieve all tweets that are replying to the user with screen name “globeandmail”

2) Retrieve all tweets made by the user with screen name “MLHealthUnit”

**You can find a file called aggregations.js that contains a query for each of the following questions, using the MongoDB aggregation framework.**

Aggregations in MongoDB are summaries of a collection. They are similar in concept to the operations performed in a MapReduce. MongoDB aggregations are more restrictive than MapReduce, but their implementation is very efficient. See the following documents for details.

https://docs.mongodb.com/v4.2/core/aggregation-introduction/

https://docs.mongodb.com/manual/reference/operator/aggregation/

3) Produce a list of users, together with the total number of times they tweeted, sorted in decreasing order.

4) Produce a list of place names, together with the total number of tweets from that place name, sorted in decreasing order.

5) Produce a list of users, together with the total number of replies to that user, sorted in decreasing order.

6) Produce a list of users, together with the total number of hashtags used by that user, sorted in decreasing order.

**You can find a file called mapreduce.js that provides a mapper, reducer, and mongodb query to answer the question below.**

Because the aggregation model cannot handle all types of summaries, MongoDB also provides a mechanism for MapReduce computations. The syntax is somewhat simpler than python and hadoop; here is an example:.

****
function myMapper() {

    //The mapper function is called with each document, which has the special name 'this'
    
    //Emit a key-value pair:
    
    emit(this.user.screen_name, 1);
    
}

function myReducer(key, values) {

    //The reducer is called once for each key, and is passed an array
    
    //containing all values corresponding to that key.
    
    //Produce the desired result
    
    return Array.sum( values );
    
}

db.tweets.mapReduce(myMapper, myReducer, { query: {}, out: "mroutput" })

db.mroutput.aggregate({$sort: {value: -1}})

****

Note that the output of the MapReduce has been placed in a new collection called mroutput, which is then queried to get the top answers. (This collection can be given any name.)

7) Produce a new collection that contains each hashtag used in the collection of tweets, along with the number of times that hashtag was used.
