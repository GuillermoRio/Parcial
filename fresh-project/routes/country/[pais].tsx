import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"

type Capital = {
    name: string,
    capital: string
}

export const handler:Handlers = {
    async GET (__req: Request, ctx: FreshContext){
        const param = ctx.params.pais
        console.log(param)
        const url = `https://api.api-ninjas.com/v1/country?name=${param}`;
        console.log(url)
        try {
            const response = await axios.get<Capital[]>(url, {
                headers: {
                  "X-Api-Key": "o41UmkM39ZTvU9n00j/IIg==H9RI53qcyieVU6GE",
                },
              });
              console.log(response.data[0].capital)
            return ctx.render({name: response.data[0].name, capital: response.data[0].capital})
        }catch(e){
            <div>ERROR</div>
        }
    }
}

const Page = (props: PageProps<Capital>) => {
    const {name, capital} = props.data
    return(
        <div> 
            <h1>{name}</h1><br/>
            <text>Capital: {capital}</text>
        </div>
    );
}
export default Page;