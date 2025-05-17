import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import NombreCap from "../../components/Nombre.tsx"

type Capital = {
    name: string,
    capital: string
}

export const handler:Handlers = {
    async GET (__req: Request, ctx: FreshContext){
        const param = ctx.params.pais
        const url = `https://api.api-ninjas.com/v1/country?name=${param}`;
        try {
            const response = await axios.get<Capital[]>(url, {
                headers: {
                  "X-Api-Key": "o41UmkM39ZTvU9n00j/IIg==H9RI53qcyieVU6GE",
                },
              });
            return ctx.render({name: response.data[0].name, capital: response.data[0].capital})
        }catch(e){
            <div>ERROR</div>
        }
    }
}

const Page = (props: PageProps<Capital>) => {
    const {name, capital} = props.data
    return(
        <NombreCap name={name} capital={capital} />
    );
}
export default Page;