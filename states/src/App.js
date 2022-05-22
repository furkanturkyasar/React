import {useState} from "react"

function App() {
  const [name, setName] = useState("Furkan")
  const [age, setAge] = useState("22")
  const [friends, setFriends] = useState(["Ahmet", "Mehmet"])
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34000})

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge("28")}>Change Age</button>
      
      <hr />
      <br />

      <h2>Friends</h2>
      {friends.map((friend, key) => (
        <div key={key}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Ayse"])}>Change Friends</button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <br />
      <button onClick={() => setAddress({ ...address, title: "Yalova"})}>
        Change the address
      </button>

    </div>
  );
}

export default App;
