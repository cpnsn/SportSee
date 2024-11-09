import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../api/fetchUser";
import { fetchUserActivity } from "../api/fetchUserActivity";
import DailyActivityChart from "../components/charts/DailyActivityChart";

export default function Profil() {
  const { id } = useParams();
  const [user, setUser] = useState({
    data: { userInfos: { firstName: "", lastName: "", age: null } },
  });
  const [activity, setUserActivity] = useState([]);

  useEffect(() => {
    fetchUser(id)
      .then((userData) => setUser(userData))
      .catch((error) => console.error("Error fetching user:", error));

    fetchUserActivity(id)
      .then((activityData) => setUserActivity(activityData.data.sessions))
      .catch((error) => console.error("Error fetching activity:", error));
  }, [id]);

  return (
    <div className="flex h-full">
      <div className="relative bg-black text-white w-fit p-6 flex flex-col justify-center h-[91vh]">
        <img
          className="mb-4 w-[50px]"
          src={"/icons/sports/meditation.svg"}
          alt="meditation icon"
        />
        <img
          className="mb-4 w-[50px]"
          src={"/icons/sports/swimming.svg"}
          alt="swimming icon"
        />
        <img
          className="mb-4 w-[50px]"
          src={"/icons/sports/cycling.svg"}
          alt="cycling icon"
        />
        <img
          className="w-[50px]"
          src={"/icons/sports/workout.svg"}
          alt="workout icon"
        />
        <span className="rotate-[-90deg] text-xs absolute bottom-24 left-1/2 -translate-x-1/2 w-max">
          Copyright SportSee 2024
        </span>
      </div>

      <div className="py-16 px-20 w-full">
        <h1 className="text-4xl font-[Roboto-Medium] mb-8">
          Bonjour{" "}
          <span className="text-[#FF0000]">
            {user.data.userInfos.firstName}
          </span>
        </h1>
        <p className="mb-20">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>

        <div className="flex w-full">
          <div className="w-[70%] h-full">
            <div className="bg-lightGrey py-6 pl-8 relative h-[320px] w-full">
              <p className="absolute pb-10">Activité quotidienne</p>
              <DailyActivityChart activity={activity} />
            </div>
          </div>
          <div className="w-[30%]"></div>
        </div>
      </div>
    </div>
  );
}
