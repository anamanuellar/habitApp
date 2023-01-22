import Fastify from 'fastify'
import cors from'@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

/**
 * Método HTTP: Get(buscar informações, trazer lista, dados), Post(rota que irá criar alguma coisa), Put(rota que irá atualizar algum recurso), Patch(atualizar uma informaçãoespecifica de um recurso), delete(deletar um recurso no back-end)
 */

app.get('/', async () => {
    const habits = await prisma.habit.findMany()

    return habits
})

app.listen({
    port: 3333,
})