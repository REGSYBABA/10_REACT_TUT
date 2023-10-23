import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)

        if (!response.ok) throw new Error("Couldn't Fetch Data")

        const data = await response.json()
        setItems(data)
        console.log(data)
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchItems()
  }, [reqType])

  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Form
        reqType={reqType}
        setReqType={setReqType}
      />
      <List items={items} />
    </div>
  );
}

export default App;
