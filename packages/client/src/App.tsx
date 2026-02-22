import { useEffect, useState } from "react";
import type { User } from "@monorepo/shared";
import { route } from "@monorepo/server";
import { hc } from "hono/client";
const client = hc<typeof route>("http://localhost:3000/");
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    client.api.users
      .$get({}, { init: { signal: abortController.signal } })
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      abortController.abort("Request aborted due to component unmount");
    };
  }, []);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error}</div>;

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
