import {use, useState} from 'react';

function App() {
  const [username, setUsername] = useState('');

  const [userdetails, setUserDetails] = useState({});

  const searchGithub = async () => {
    const responce = await fetch(`https://api.github.com/users/${username}`);
    const data = await responce.json();
    setUserDetails(data);
  };
  return (
    <div>
      <h1 className='title'>Github Search</h1>
      <input type="text" className='searchtext' onChange={(e) => {
        setUsername(e.target.value)
      }} placeholder="Enter github username:"/>
      <button className='searchbtn' onClick={() => {
        console.log(username);

        searchGithub();
      }}>Search</button>

      <h1 className='github-name'>{userdetails.name}</h1>
      <img className='github-img' src={userdetails.avatar_url} alt="" />
    </div>
  )
}

export default App;