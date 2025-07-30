import { ResponsivePie } from "@nivo/pie";
import React, { useEffect, useState } from "react";

function LevelCookGraph() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("/MonthLevelCookData.json");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ResponsivePie /* or Pie for fixed dimensions */
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      sortByValue={true}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      fit={false}
      activeOuterRadiusOffset={8}
      colors={{ datum: "data.color" }}
      borderColor={{ theme: "background" }}
      enableArcLinkLabels={false}
      arcLinkLabel={e => `${e.id} (${e.value})`}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#000000"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabel={e => `${e.id} (${e.value})`}
      arcLabelsSkipAngle={11}
      arcLabelsTextColor="#ffffff"
      motionConfig={{
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
      }}
    />
  );
}

export default LevelCookGraph;
