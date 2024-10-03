import './App.css';

const App = () => {

  const Person = ({name, job, description}) => {
    return (
      <>
        <h1>{name}</h1>
        <h3>{job}</h3>
        <p>{description}</p>
      </>
    )
  }

  return (
    <div className="App">
      <Person
        name={'John'}
        job={'Carpenter'}
        description={'Can fly'}
      />
    </div>
  );
}

export default App;
