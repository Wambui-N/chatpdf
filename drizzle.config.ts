import { defineConfig } from "drizzle-kit";
export default defineConfig({
// @ts-expect-error
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
