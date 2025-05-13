const { version } = require("joi");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express")

const options = {
    definition: {
        openapi: "3.0.0",
         info: {
            title: "Express API with Swagger",
            version: "1.0.0",
         },
    },
    apis: ["./Routes/*.js"]
};

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

};

module.exports = setupSwagger;