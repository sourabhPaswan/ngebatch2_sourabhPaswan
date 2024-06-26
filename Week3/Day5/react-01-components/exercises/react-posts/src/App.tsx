import "./App.css";
import Comment from "./components/Comment";

function App() {
  const comments = [
    {
      date: "01/04/2022 09:09:23",
      text: "Just writing some stuff on the internet!",
      author: {
        name: "Fiona Worx",
        avatarUrl: "https://robohash.org/Fiona?size=60x60",
      },
    },
    {
      date: "02/04/2022 10:14:34",
      text: "I'm learning react at the moment, it is great!",
      author: {
        name: "Fiona Worx",
        avatarUrl: "https://robohash.org/Fiona?size=60x60",
      },
    },
  ];

  return (
    <div className="app">
      <h1>My Great Social Media Posts</h1>
      <Comment data={comments} />
    </div>
  );
}

export default App;
