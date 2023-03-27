import { createContext } from "react";
import { Props } from "../types";

const Conxtexto = createContext<Props>({} as Props);

export default Conxtexto;