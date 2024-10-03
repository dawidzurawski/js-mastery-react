import './App.css';

const App = () => {
  const name = 5 === 6
  const isNameShowing = 5 === 6
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? 9 : 'someone'}!</h1>
      {name ? (
        <>
          test
        </>) : (
          <>
            <h1>Hello</h1>
            <h2>Blue</h2>
          </>
        )}
    </div>
  );
}

export default App;
