import express, { Express } from 'express'
import cors from 'cors'
import {
    SERVICE_LOCAL_PORT,
    NODE_ENV,
    allowedOrigin
} from "../constant/config"
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from 'swagger-jsdoc';
import { router as v1 } from "../v1/routes"
import { badRequest } from '../v1/middlewares/errHandler'

const httpServer: Express = express()
const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Ambisius API Docs",
        version: "1.0.0",
        description:
          "Ambisius API Docs",
      },
      servers: [
        {
          url: "http://localhost:4080",
        },
      ],
    },
    apis: ["./src/v1/routes/index.ts"],
  };
const specs = swaggerDocs(options)
const httpServerInit = async () => {
    httpServer.use(express.urlencoded({ extended: true }))
    httpServer.use(express.json())
    httpServer.use(cors({
        ...allowedOrigin.length !== 0 ? { origin: (origin, callback) => {
            if (!origin) return callback(null, true);
            if (!allowedOrigin.includes(origin)) {
                const error = new Error(`Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at ${origin}.`);
                delete error.stack
                return callback(error, false)
            }
            return callback(null, true)
        }} : {}
    }))
    httpServer.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
    httpServer.use('/api/v1', v1);
    httpServer.use(badRequest)
}

export { httpServerInit, httpServer, SERVICE_LOCAL_PORT, NODE_ENV }