//Api RESTful [Back - End]
//rota de criar habito , retorna informação de habito... etc.
// Fastify -> Similar ao Express, porém tem um suporte melhor e também é mais avançado e performático
import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";

const app = Fastify()

app.register(cors)
app.register(appRoutes)



app.listen({
    port:3333,
}).then(()=> {
    console.log('HTTP Server Runing!')
})