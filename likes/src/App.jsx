import {useState} from 'react';

function App() {
  const [likes, setlikes] = useState(0);

  const likeButtonClick = () => {
    setlikes(likes + 1);
  };
  const unlikeButtonClick = () => {
    if (likes > 0) {
      setlikes(likes - 1);
    }
  };
  return (
    <div>
      <h1>Likes Website</h1>
      <h1>Total Likes: {likes}</h1>
      <button onClick={likeButtonClick}>Like Now</button>
      <button onClick={unlikeButtonClick}>Unlike Now</button>
    </div>
  );
}

export default App;