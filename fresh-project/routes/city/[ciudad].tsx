import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import TemperaturaComp from "../../components/Temp.tsx"

type Temperatura = {
    min_temp: number,
    max_temp: number,
    temp: number
}
type LatLonCountry = {
    latitude: number,
    longitude: number,
    country: string
}
type Data = {
    min_temp: number,
    max_temp: number,
    temp: number,
    country: string,
    city: string
}
export const handler:Handlers = {
    async GET (__req: Request, ctx: FreshContext<unknown,Data>){
        const param = ctx.params.ciudad
        try {
            const responseLatLon = await axios.get<LatLonCountry[]>(`https://api.api-ninjas.com/v1/city?name=${param}`, {
                headers: {
                    "X-Api-Key": "o41UmkM39ZTvU9n00j/IIg==H9RI53qcyieVU6GE",
                },
            })
            const responseTemp = await axios.get<Temperatura>(`https://api.api-ninjas.com/v1/weather?lat=${responseLatLon.data[0].latitude}&lon=${responseLatLon.data[0].longitude}`, {
                headers: {
                    "X-Api-Key": "o41UmkM39ZTvU9n00j/IIg==H9RI53qcyieVU6GE",
                },
            })
            return ctx.render({
                min_temp: responseTemp.data.min_temp,
                max_temp: responseTemp.data.max_temp,
                temp: responseTemp.data.temp,
                country: responseLatLon.data[0].country,
                city: param
            })
        }catch(e){
            <div>ERROR</div>
        }
    }
}

const Page = (props: PageProps<Data>) => {
    const {min_temp, max_temp, temp, country, city} = props.data
    return(
        <>
            <TemperaturaComp min_temp={min_temp} max_temp={max_temp} temp={temp} country={country} city={city}/>
        </>
    );
}

export default Page;