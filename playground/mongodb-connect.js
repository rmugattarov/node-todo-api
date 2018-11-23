const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  db.collection('Todos').insertOne({
    test: 'Smth',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log(JSON.stringify(result.ops), undefined, 2);
  });

  client.close();
});
