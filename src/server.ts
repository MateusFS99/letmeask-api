import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();
const serverPort = process.env.PORT ? Number(process.env.PORT) : 3333;

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.listen({ port: serverPort }).then(() => {
  console.log(`Server Running on Port ${serverPort}`);
});
