import './App.css';

function App() {
  const title = 'Application Content';
  const likes = 50;
  //const person ={name:'Kenneth', age: 50}
  const arr = [1,2,3,4];
  const url = 'www.google.com';
  return (
    <div className="App">
      <div className="content">
        <h2>{title}</h2>
        <p>Liked {likes} times</p>
        <p>{arr}</p>
        <a href={url}>Google</a>
      </div>
    </div>
  );
}

export default App;
