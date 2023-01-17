//Api RESTful [Back - End]
//rota de criar habito , retorna informação de habito... etc.
// Fastify -> Similar ao Express, porém tem um suporte melhor e também é mais avançado e performático
import Fastify from "fastify";
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
    const habits = await prisma.habit.findMany()
    return habits
})


app.listen({
    port:3333,
}).then(()=> {
    console.log('HTTP Server Runing!')
})