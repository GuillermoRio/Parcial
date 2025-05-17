
import { FunctionalComponent } from "preact/src/index.d.ts";

type Data = {
  min_temp: number,
  max_temp: number,
  temp: number,
  country: string,
  city: string
}

const TemperaturaComp:FunctionalComponent<Data> = (props) => {
  const {min_temp, max_temp, temp, country, city} = props
  return (
    <div> 
      <h1>City:{city}</h1>
        <text>Country:<a href={`../country/${country}`}>{country}</a></text><br/>
        <text> La temperatura minima es: {min_temp}.</text><br/>
        <text> La temperatura maxima es: {max_temp}.</text><br/>
        <text> La temperatura actual es: {temp}.</text><br/>
    </div>
  );
}

export default TemperaturaComp;