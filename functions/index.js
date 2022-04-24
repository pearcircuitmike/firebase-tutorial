const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.initializeApp().firestore();


exports.addTodo = functions.https.onCall(async (data, context) => {
  const todosRef = db.collection(`/users/${context.auth.uid}/todos`);
  const todosSnapshot = await todosRef.get();
  const todos = todosSnapshot.docs.map((snapshot) => snapshot.data());
  const exists = todos.some((todo) => todo.text === data.text);


    await todosRef.add(data, no-cors);

});
