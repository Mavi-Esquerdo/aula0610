import NoticiaComponente from './components/NoticiaComponentes';
import Img from './img/ovo.jpg'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 className="title"> Imagem </h1>
      <NoticiaComponente titulo="Ovo Careca" imagem={Img} alt="Ovo" descricao="Imagem de um ovo" categoria="Ovária"/>
    </div>
  );
}

export default App;
