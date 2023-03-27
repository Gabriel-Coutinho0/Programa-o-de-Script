import { useState } from "react";
import A from "./componentes/a";
import Conxtexto from "./contexts/Contexto";


function App() {
  const [nome, setNome] = useState("Ana")
  const [idade, setIdade] = useState("10")


  return (

    < Conxtexto.Provider value={{ nome, idade }}>

      <A />

      <div>oi</div>
      <div>2+2 ={2 + 2}</div>
      <div>
        <label>Nome:</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)}></input>
      </div>
      <div>
        <label>Idade:</label>
        <input value={idade} onChange={(e) => setIdade(e.target.value)}></input>
        <br />
        {/* <div>
          Nome: {nome}
        </div> */}



      </div>
    </Conxtexto.Provider>

  )

}

export default App;





