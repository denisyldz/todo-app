import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { 
  query, 
  collection, 
  onSnapshot, 
  where, 
  updateDoc, 
  doc, 
  addDoc, 
  deleteDoc 
} from 'firebase/firestore';

const useTodosWithActions = (filter) => {
  const [todos, setTodos] = useState([]);
  const [clearForm, setClearForm] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const collectionRef = collection(db, 'todos');
    let q = query(collectionRef, where('userId', '==', user.uid));

    if (filter) {
      q = query(q, where('completed', '==', filter.completed));
    }
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const createdAt = data.createdAt;
        const date = new Date(createdAt.seconds * 1000);
        const formattedDate = date.toLocaleString('tr-TR', {
          timeZone: 'Europe/Istanbul',
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
        todosArr.push({ ...data, id: doc.id, formattedDate });
      });
      setTodos(todosArr);
    });

    return () => unsubscribe();
  }, [filter]);

  const handleSave = async (updatedTodo) => {
    if (!updatedTodo?.id) return;
    try {
      await updateDoc(doc(db, 'todos', updatedTodo?.id), {
        title: updatedTodo?.title,
        description: updatedTodo?.description,
        completed: updatedTodo?.completed,
      });
    } catch (error) {
      console.error("Error updating todo: ", error);
    }
  };

  const createTodo = async (newTodo) => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      await addDoc(collection(db, 'todos'), {
        title: newTodo.title,
        description: newTodo.description,
        completed: newTodo.completed || false,
        createdAt: new Date(),
        userId: user.uid,
      });
      setClearForm(true);
    } catch (error) {
      console.error("Error creating todo: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
  };

  return {
    todos,
    clearForm,
    setClearForm,
    handleSave,
    createTodo,
    handleDelete,
  };
};

export default useTodosWithActions;
