import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../api/fetchUser";

function Profil() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await fetchUser(id);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    getUser();
  }, [id]);

  return (
    <div>
      <p className="text-violet-800 text-3xl">{user.data.id}</p>
    </div>
  );
}

export default Profil;
