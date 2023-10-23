import { useState, useEffect } from 'react';
import Form from './Form';
import Table from './Table';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com'
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])
  const [dataError, setDataError] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`)

        if (!response.ok) throw Error("Couldn't Fetch Data")

        const data = await response.json()
        setItems(data)
        setDataError(null)
      } catch (err) {
        setDataError(err.stack)
      }
    }

    fetchItems()
  }, [reqType])

  return (
    <div className="App">
      <Form
        reqType={reqType}
        setReqType={setReqType}
      />
      {/* <List items={items} /> */}
      {!dataError && <Table items={items} />}
    </div>
  );
}

export default App;
