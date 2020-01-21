import React, { useState } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import dummyData  from "./dummy-data";


const App = () => {
  const [dataState, setDataState] = useState(dummyData);
  return (
    <div className="App">
      <SearchBar/>
      <PostsPage data={dataState}/>
    </div>
  );
};

export default App;
