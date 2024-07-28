// useTodos.js
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { query, collection, onSnapshot, where } from 'firebase/firestore'

const useTodos = (filter) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const collectionRef = collection(db, 'todos')
    let q = query(collectionRef)
    if (filter) {
      q = query(collectionRef, where('completed', '==', filter.completed))
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        const createdAt = data.createdAt
        const date = new Date(createdAt.seconds * 1000)
        const formattedDate = date.toLocaleString('tr-TR', {
          timeZone: 'Europe/Istanbul',
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          hour: '2-digit', minute: '2-digit', second: '2-digit'
        })
        todosArr.push({ ...data, id: doc.id, formattedDate })
      })
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [filter])

  return todos
}

export default useTodos
