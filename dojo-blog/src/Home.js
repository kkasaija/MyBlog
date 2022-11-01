const Home = () => {
  const Click = () => {
    console.log('Hi Ken');
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={Click}>button</button>
    </div>
  );
}
 
export default Home;