import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllUserData } from "../api/fetchData";
import DailyActivityChart from "../components/charts/DailyActivityChart";
import AverageSessionChart from "../components/charts/AverageSessionChart";
import PerformanceChart from "../components/charts/PerformanceChart";
import ScoreChart from "../components/charts/ScoreChart";
import KeyFigures from "../components/KeyFigures";
import UserDataModel from "../utils/UserDataModel";

export default function Profil() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { user, activity, averageSessions, performance } = await fetchAllUserData(id);
        const formattedData = new UserDataModel(
          user.data,
          activity.data,
          averageSessions.data,
          performance.data
        );
        setUserData(formattedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!userData) {
    return <div>Chargement...</div>;
  }

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

      <div className="py-16 px-8 xl:pl-32 xl:pr-20 min-[2000px]:px-[20%] w-full">
        <h1 className="text-4xl font-[Roboto-Medium] mb-8">
          Bonjour{" "}
          <span className="text-[#FF0000]">{userData.userInfos.firstName}</span>
        </h1>
        <p className="mb-20">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>

        <div className="xl:flex justify-between w-full">
          <div className="flex flex-col xl:w-[70%] h-full mb-10 xl:mb-0">
            <div className="bg-lightGrey mb-10 rounded-md py-6 pl-8 relative h-[400px] w-full">
              <p className="absolute pb-10">Activité quotidienne</p>
              <DailyActivityChart activity={userData.activity} />
            </div>
            <div className="flex justify-between">
              <div className="rounded-md overflow-hidden relative h-[260px] 2xl:h-[320px] w-[31%]">
                <p className="absolute pb-10 z-10 text-white opacity-50 ml-6 mt-6">
                  Durée moyenne des<br /> sessions
                </p>
                <AverageSessionChart averageSession={userData.averageSessions} />
              </div>
              <div className="rounded-md bg-[#282D30] overflow-hidden relative h-[260px] 2xl:h-[320px] w-[31%]">
                <PerformanceChart performance={userData.performance} />
              </div>
              <div className="rounded-md bg-lightGrey overflow-hidden relative h-[260px] 2xl:h-[320px] w-[31%]">
                <ScoreChart user={userData} />
              </div>
            </div>
          </div>
          <div className="xl:w-[27%] flex xl:flex-col justify-between">
            <KeyFigures
              icon="/icons/key_figures/calories.svg"
              color="bg-redChart bg-opacity-[6.61%]"
              figure={`${userData.keyData.calorieCount}kCal`}
              title="Calories"
            />
            <KeyFigures
              icon="/icons/key_figures/proteines.svg"
              color="bg-lightBlue bg-opacity-[10%]"
              figure={`${userData.keyData.proteinCount}g`}
              title="Protéines"
            />
            <KeyFigures
              icon="/icons/key_figures/glucides.svg"
              color="bg-lightYellow bg-opacity-[10.17%]"
              figure={`${userData.keyData.carbohydrateCount}g`}
              title="Glucides"
            />
            <KeyFigures
              icon="/icons/key_figures/lipides.svg"
              color="bg-lightRed bg-opacity-[10%]"
              figure={`${userData.keyData.lipidCount}g`}
              title="Lipides"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
