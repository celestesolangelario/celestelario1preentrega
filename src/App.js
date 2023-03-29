import './App.css';
import ItemListContainer from './component/ItemListContainer/itemlistcontainer';
import Navbar from './component/navbar/Navbar';

/*import Counter from './component/Counter/Counter.js';*/

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos a Vicios Freaks!'}/>
      {/*<Counter/>*/}
    </div>
  );
}

export default App;
