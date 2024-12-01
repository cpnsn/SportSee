import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../api/fetchUser";
import { fetchUserActivity } from "../api/fetchUserActivity";
import { fetchAverageSession } from "../api/fetchAverageSession";
import { fetchPerformance } from "../api/fetchPerformance";
import DailyActivityChart from "../components/charts/DailyActivityChart";
import AverageSessionChart from "../components/charts/AverageSessionChart";
import PerformanceChart from "../components/charts/PerformanceChart";
import ScoreChart from "../components/charts/ScoreChart";
import KeyFigures from "../components/KeyFigures";

export default function Profil() {
  const { id } = useParams();
  const [user, setUser] = useState({
    data: {
      userInfos: { firstName: "", lastName: "", age: null },
      keyData: {
        calorieCount: null,
        proteinCount: null,
        carbohydrateCount: null,
        lipidCount: null,
      },
      todayScore: null,
    },
  });
  const [activity, setUserActivity] = useState([]);
  const [averageSession, setAverageSession] = useState([]);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    fetchUser(id)
      .then((userData) => setUser(userData))
      .catch((error) => console.error("Error fetching user:", error));

    fetchUserActivity(id)
      .then((activityData) => setUserActivity(activityData.data.sessions))
      .catch((error) => console.error("Error fetching activity:", error));

    fetchAverageSession(id)
      .then((sessionData) => setAverageSession(sessionData.data.sessions))
      .catch((error) => console.error("Error fetching session:", error));

    fetchPerformance(id)
      .then((perfData) => setPerformance(perfData.data))
      .catch((error) => console.error("Error fetching performance:", error));
  }, [id]);

  return (
    <div className="flex h-full">
      <div className="relative bg-black text-white w-fit p-6 flex flex-col justify-center min-h-[91vh]">
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

      <div className="py-16 pl-32 pr-20 w-full">
        <h1 className="text-4xl font-[Roboto-Medium] mb-8">
          Bonjour{" "}
          <span className="text-[#FF0000]">
            {user.data.userInfos.firstName}
          </span>
        </h1>
        <p className="mb-20">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>

        <div className="flex justify-between w-full">
          <div className="flex flex-col w-[70%] h-full">
            <div className="bg-lightGrey mb-10 rounded-md py-6 pl-8 relative h-[400px] w-full">
              <p className="absolute pb-10">Activité quotidienne</p>
              <DailyActivityChart activity={activity} />
            </div>
            <div className="flex justify-between">
              <div className="rounded-md overflow-hidden relative h-[320px] w-[31%]">
                <p className="absolute pb-10 z-10 text-white opacity-50 ml-6 mt-6">
                  Durée moyenne des
                  <br /> sessions
                </p>
                <AverageSessionChart averageSession={averageSession} />
              </div>
              <div className="rounded-md bg-[#282D30] overflow-hidden relative h-[320px] w-[31%]">
                <PerformanceChart performance={performance} />
              </div>
              <div className="rounded-md bg-lightGrey overflow-hidden relative h-[320px] w-[31%]">
                <ScoreChart user={user} />
              </div>
            </div>
          </div>
          <div className="w-[27%] flex flex-col justify-between">
            <KeyFigures
              icon="/icons/key_figures/calories.svg"
              color="bg-redChart bg-opacity-[6.61%]"
              figure={`${user.data.keyData.calorieCount}kCal`}
              title="Calories"
            />
            <KeyFigures
              icon="/icons/key_figures/proteines.svg"
              color="bg-lightBlue bg-opacity-[10%]"
              figure={`${user.data.keyData.proteinCount}g`}
              title="Protéines"
            />
            <KeyFigures
              icon="/icons/key_figures/glucides.svg"
              color="bg-lightYellow bg-opacity-[10.17%]"
              figure={`${user.data.keyData.carbohydrateCount}g`}
              title="Glucides"
            />
            <KeyFigures
              icon="/icons/key_figures/lipides.svg"
              color="bg-lightRed bg-opacity-[10%]"
              figure={`${user.data.keyData.lipidCount}g`}
              title="Lipides"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
