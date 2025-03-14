
function App() {


  const apiHandler = () =>{
    // console.log("Hay");
    // fetch("http://localhost:5000/tasks").then(res => res.json())
    // .then(data => console.log(data));

    fetch("http://localhost:5000/tasks/2").then(res => res.json())
    .then(data => console.log(data));

    fetch("http://localhost:5000/tasks/1").then(res => res.json())
    .then(data => console.log(data));

    fetch("http://localhost:5000/tasks/3").then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <>
      <button className='bg-lime-600 text-white rounded-md p-2 m-5' onClick={apiHandler}>Api call</button>
    </>
  )
}

export default App
