import Hello from './assets/Hello';
import Contact from './assets/Contact';
import Counter from './assets/Counter';



function App() {
  
  console.log("App component");
  const helloData = [
    {name: "Anirach" , message: "Good Morning"},
    {name: "Racha" , message: "Good Night"},
  ];



  return (
   <div>

    {helloData.map((data,index) => (
      <Hello key={index} name ={data.name} message = {data.message} />
    ))}

  <Contact email="Anirach@gmail.com" phone = "02115365" />
    </div>
  );
}

export default App
