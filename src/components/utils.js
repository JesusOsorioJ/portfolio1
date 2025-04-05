export function generateRandomString(n) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < n; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const technologies = {
  frontend: [
    "JS",
    "TS",
    "react",
    "nextjs",
    "vite",
    "angular",
    "bootstrap",
    "tailwind",
    "sass",
    "socket",
    "redux",
    "gapsap",
  ],
  backend: [
    "TS",
    "node",
    "express",
    "JSDoc",
    "swagger",
    "stripe",
    "sendgrid",
    "cloudinary",
    "graphql",
    "nodemon",
    "eslint",
    "express-validator",
  ],
  database: ["mongodb", "prisma", "firebase", "postgresql", "mysql"],
  test: ["jest", "cypress", "mocha", "chai"],
};
