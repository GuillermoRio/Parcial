import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { NONE } from "$fresh/runtime.ts";
import axios from "npm:axios"
type Country = {
  country: string,
  phone: string
}

export const handler:Handlers = {
  async GET (req: Request,ctx: FreshContext){
    try{
    const url = new URL(req.url)
    const param = url.searchParams.get("number");
    if (param) {
      const datos = await axios.get<Country>(`https://api.api-ninjas.com/v1/validatephone?number=${param}`, {
        headers: {
          "X-Api-Key": "o41UmkM39ZTvU9n00j/IIg==H9RI53qcyieVU6GE",
        },
      });
      datos.data.phone = param
      return ctx.render(datos.data)
    } else {
      return ctx.render("null")
    }
    
    }catch(e){
      <div>ERROR</div>
    }
  }
}

const Page = (props: PageProps) => {
  const {country, phone} = props.data
  return(
    <div>
      <form action="" method="Get">
        <input type="text" name="number"></input>
        <button type="submit">Send</button>
      </form>
      <a href={`../country/${country}`}> {country}</a><br/>
      <text>{phone}</text>
    </div>
  );
}

export default Page;
