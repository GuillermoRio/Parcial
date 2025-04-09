
import { FunctionalComponent } from "preact/src/index.d.ts";

type Capital = {
  name: string,
  capital: string
}

const NombreCap:FunctionalComponent<Capital> = (props) => {
  const {name, capital} = props
  return (
   <div> 
            <h1>{name}</h1><br/>
            <text>Capital: <a href={`../city/${capital}`}>{capital}</a></text>
        </div>
  );
}

export default NombreCap;