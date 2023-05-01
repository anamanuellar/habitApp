import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

//passando um objeto de opções com port e host definidas e assim receber o end completo do servidor como o segundo argumento do callback.
app.listen({
    port: 3333,
    host: '0.0.0.0' //aceitar conexões de qualquer endereço IP na rede local
  }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Servidor iniciado em ${address}`)
  })
  