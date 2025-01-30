import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { useEffect } from "react";
import "./App.css";

const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    description: "Hi I'm Marsudi, a backend software engineer who is passionate about building scalable, efficient, and resilient systems. I value the engineering process and the results of creating technology with 💙 through research, problem solving, architectural design, and smooth backend development.",
    version: "0.0.1",
    title: "Marsudi Portfolio",
    contact: {
      name: "Linkedin",
      email: "",
      url: "https://www.linkedin.com/in/marsudi/",
    },
    license: {
      name: "Github Profile",
      url: "https://github.com/Marsudii"
    },
  },
  tags: {
    name: "Marsudi's Portfolio",
    description: "API for Marsudi's Portfolio"
  },
  servers: [
    {
      url: "",
      description: "Development"
    },
    {
      url: "",
      description: "Staging"
    },
    {
      url: "",
      description: "Production"
    }
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      },
      header: {
        type: "apiKey",
        in: "header",
        name: "x-api-key"
      }
    },

    schemas: {

      About: {

        type: "object",
        properties: {
          name: { type: "string", example: "Marsudi" },
          profession: { type: "string", example: "Fullstack Developer" },
          bio: { type: "string", example: "Passionate about backend development!" }
        }
      },



      Skill: {
        type: "string",
        example: "JavaScript"
      },
      Project: {
        type: "object",
        properties: {
          title: { type: "string", example: "Portfolio Website" },
          description: { type: "string", example: "A personal website showcasing my work." },
          techStack: {
            type: "array",
            items: { type: "string" },
            example: ["React", "Node.js", "MongoDB"]
          }
        }
      }
    }
  },


  security: [{ BearerAuth: [] }],
  paths: {
    "/about-me": {
      get: {
        summary: "Get about information",
        description: "Returns details about the portfolio owner",
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: { "$ref": "#/components/schemas/About" }
              }
            }
          }
        }
      }
    },

    "/expertise": {
      get: {
        summary: "Get list of skills",
        description: "Returns a list of skills",
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { "$ref": "#/components/schemas/Skill" }
                }
              }
            }
          }
        }
      }
    },

    "/work-experience": {
      get: {
        summary: "Get list of skills",
        description: "Returns a list of skills",
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { "$ref": "#/components/schemas/Skill" }
                }
              }
            }
          }
        }
      }
    },


    "/projects": {
      get: {
        summary: "Get list of projects",
        description: "Returns a list of projects",
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { "$ref": "#/components/schemas/Project" }
                }
              }
            }
          }
        }
      }
    }
  }
};


const App = () => {
  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }, []);

  return <>
    <SwaggerUI spec={swaggerSpec} />

    {/* FOOTER BELUm */}
    <div className="footer">
    </div>
  </>;

};


export default App;
