import { createFileRoute } from "@tanstack/react-router";
import { hc } from "hono/client";
import { useEffect, useState } from "react";

import type { route } from "@monorepo/server";
import type { User } from "@monorepo/shared";

export const Route = createFileRoute("/")({ component: App });

const client = hc<typeof route>("http://localhost:3000/");

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    client.api.users
      .$get({}, { init: { signal: abortController.signal } })
      .then(async (res) => res.json())
      .then((res) => {
        setUsers(res.data);
        setError(null);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      abortController.abort("Component unmounted, aborting fetch");
    };
  }, []);

  if (loading) return <p className="container">Loading...</p>;
  if (error) return <p className="container">Error: {error}</p>;

  return (
    <div className="container">
      <h1>Bun Monorepo - React Client</h1>
      <h2>Users from Hono Backend</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
