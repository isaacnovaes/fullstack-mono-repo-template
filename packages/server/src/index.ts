import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { cors } from "hono/cors";
import * as z from "zod";

import type { User, UserResponse, UsersResponse } from "@monorepo/shared";

const app = new Hono();

// Enable CORS for client
app.use("/*", cors());

// Mock data
const users: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
];

// Routes
export const route = app
  .get("/", (c) => {
    return c.json({ message: "Hello from Hono server!" });
  })
  .get("/api/users", (c) => {
    const response: UsersResponse = {
      success: true,
      data: users,
    };

    return c.json(response);
  })
  .get("/api/users/:id", (c) => {
    const id = c.req.param("id");
    const user = users.find((u) => u.id === id);

    if (!user) {
      const errorResponse: UserResponse = {
        success: false,
        error: "User not found",
      };

      return c.json(errorResponse, 404);
    }

    const response: UserResponse = {
      success: true,
      data: user,
    };
    return c.json(response);
  })
  .post(
    "/posts",
    zValidator(
      "form",
      z.object({
        body: z.string(),
      }),
    ),
    (c) => {
      const validated = c.req.valid("form");
      return c.json({ success: true, data: validated });
    },
  );

const port = 3000;
console.warn(`Server is running on http://localhost:${String(port)}`);

export default {
  port,
  fetch: app.fetch,
};
