import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  //Our Array of data that we are going to work on with
  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const stories = [
    {
      title: "React",
      author: "Jordan Walke",
      url: "https://reactjs.org",
      points: 5,
      num_comments: 5,
      objectID: 0,
    },
    {
      title: "Redux",
      author: "Dan Ambrov",
      url: "https://redux.js.org",
      points: 3,
      num_comments: 4,
      objectID: 1,
    },
  ];

  // the state of our component
  const [searchTerm, setSearchItem] = useState(
    localStorage.getItem("search") || "React"
  );
  // the filtered word that we are going to pass to the List
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <h1 className="title">Hacker stories</h1>
      <Search onSearch={handleSearch} />
      <List list={searchedStories} />
    </main>
  );
};

const Search = ({ onSearch }) => {
  return (
    <>
      <h1 className="search-title">This is where the search component start</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={onSearch} />
    </>
  );
};
const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};
const Item = (props) => {
  return (
    <li className={props.item.title == "React" ? "react" : "redux"}>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author} </span>
      <span> {props.item.num_comments} </span>
      <span>{props.item.points} </span>
    </li>
  );
};
export default App;
