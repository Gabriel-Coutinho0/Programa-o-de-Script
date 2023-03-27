import { useContext } from "react";
import Conxtexto from "../contexts/Contexto";

function C() {
    const { nome, idade } = useContext(Conxtexto)
    return <div> <div>
        Nome: {nome} Idade: {idade}
    </div></div>
}

export default C;