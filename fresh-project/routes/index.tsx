import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
type Country = {
  country: string,

}

export const handler:Handlers = {
  async GET (req: Request,ctx: FreshContext){
    try{
    const url = new URL(req.url)
    const param = url.searchParams.get("number") || "+34 670432798"

    const datos = await axios.get<Country>(`https://api.api-ninjas.com/v1/validatephone?number=${param}`, {
      headers: {
        "X-Api-Key": "o41UmkM39ZTvU9n00j/IIg==H9RI53qcyieVU6GE",
      },
    });
    return ctx.render(datos.data)
    }catch(e){
      <div>ERROR</div>
    }
  }
}

const Page = (props: PageProps) => {
  const {country} = props.data
  return(
    <div>
      <form action="" method="Get">
        <input type="text" ></input>
        <button type="submit">Send</button>
      </form>
      <a> {country} </a>
    </div>
  );
}

export default Page;
