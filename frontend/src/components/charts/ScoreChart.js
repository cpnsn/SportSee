import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const ScoreChart = ({ user }) => {
  const score = user?.data?.todayScore ?? user?.data?.score ?? 0;

  const scoreData = [
    { name: "Completed", value: score },
    { name: "Remaining", value: 1 - score },
  ];

  const COLORS = ["#FF0000", "#FBFBFB"];

  return (
    <div className="score-chart">
      <h2 className="mt-6 ml-8">Score</h2>
      <div className="flex justify-center" style={{ position: "relative" }}>
        {/* personnalisation couleur intérieure */}
        <svg width={200} height={200} style={{ position: "absolute" }}>
          <circle cx="100" cy="100" r="88" fill="#fff" />
        </svg>
        <PieChart width={200} height={200}>
          <Pie
            data={scoreData}
            cx="50%"
            cy="50%"
            innerRadius={88}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
            dataKey="value"
          >
            <Cell fill={COLORS[0]} />
            <Cell fill={COLORS[1]} />
          </Pie>
        </PieChart>
        <div
          className="score-label"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <p>
            <strong>{Math.round(score * 100)}%</strong> <br />
            de votre <br/> objectif
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoreChart;
