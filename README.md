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


