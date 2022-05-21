import './App.css';
import User from "./components/User"

const friends = [
  {
    id: 1,
    name: "Furkan"
  },
  {
    id: 2,
    name: "Didem"
  },
  {
    id: 3,
    name: "Someone"
  },
];

function App() {
  return(
    <>
      <User name="Furkan" 
      surname="Turkyasar" 
      isLogged={true} 
      age={"22"} 
      friends={friends}
      address={{
        title: "Maltepe/Istanbul",
        zip: 34000
      }} 
      />
    </>
  );
}

export default App;