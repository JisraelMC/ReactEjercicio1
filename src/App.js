import "./App.css";
import Testimonio from "./componentes/testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Herramientas Para Desarrollo Web</h1>
        <Testimonio
          nombre="HTML"
          herramienta="Lenguaje de Marcas de Hipertexto"
          imagen="html"
          Testimonio="Es un lenguaje de marcado que se utiliza para el desarrollo de páginas web de internet, podria ser traducido cómo lenguaje de formato de documento para hipertexto."
        />
        <Testimonio
          nombre="CSS"
          herramienta="Hojas de estilo en Cascadas"
          imagen="css"
          Testimonio="Es un lenguaje que parte de un concepto simple pero muy potente, aplicar estilos colores, formas, margenes para documentos, un lenguaje basado en reglas especificando los grupos de estilos que van a aplicarse."
        />
        <Testimonio
          nombre="JavaScript"
          herramienta="Lenguaje de Programacion"
          imagen="1"
          Testimonio="Es un lenguaje de programación que se utiliza para tener interacción y que la pagína no sea solo estatica, se crea interaccion utilizando funciones y támbien se puede usar para crear videojuegos y apps."
        />
      </div>
    </div>
  );
}

export default App;
