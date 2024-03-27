import swaggerJsdoc from "swagger-jsdoc";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

export const setupSwagger = (app) => {
  // Load Swagger document
  const swaggerDocument = YAML.load("./swagger.yaml");
  // Serve Swagger UI
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
