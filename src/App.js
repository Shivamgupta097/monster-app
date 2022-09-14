import { useEffect, useState } from "react";
import "./App.scss";
import MonsterCard from "./components/MonsterCard/MonsterCard";
import SearchBox from "./components/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState("");



//Api fetching start
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonsters(user));
  }, []);

  //set the search input
  const searchChangeHandler = (event) => {
    console.log(event.target.value);
    setSearchField(event.target.value.toLowerCase());
  };


//set the filteredmonster
  useEffect(() => {
    const filter = monsters.filter((cur) =>
      cur.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(filter);
  }, [searchField, monsters]);

  return (
    <div className="App">
      <main>
        <h1 className="title">Monster Galaxy</h1>
        <SearchBox type ="search" onChange={searchChangeHandler} placeholder="Search Monster" className="search-box"/>
        
      <MonsterCard filteredMonsters={filteredMonsters}/>
      </main>
    </div>
  );
}

export default App;
