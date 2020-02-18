const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },

  (error, client) => {
    if (error) {
      return console.log("Unable to connect to db", error);
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Pavel",
    //     age: 38
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Dasha",
    //       age: 29
    //     },
    //     {
    //       name: "Igor",
    //       age: 53
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user!");
    //     }

    //     console.log(result.insertedIds);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Sleep",
    //       complete: true
    //     },
    //     {
    //       description: "Reed",
    //       complete: false
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert task!");
    //     }

    //     console.log(result.insertedIds);
    //   }
    // );

    db.collection("users")
      .updateOne(
        {
          _id: new ObjectID("5e30d3817e21f948420d4c04")
        },
        {
          $set: {
            name: "Alex"
          }
        }
      )
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
