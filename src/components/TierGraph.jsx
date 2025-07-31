import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";

function TierGraph() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("/TierData.json");
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
    <ResponsiveBar /* or Bar for fixed dimensions */
      data={data}
      indexBy="tier"
      keys={["value"]}
      colors={bar => bar.data.color}
      theme={{
        labels: { text: { fontSize: 20, fill: "#fff" } },
        axis: { ticks: { text: { fontSize: 15 } } },
      }}
      // labelSkipWidth={12}
      // labelSkipHeight={12}
      labelTextColor="#ffffff"
      borderColor={{ from: "color", modifiers: [] }}
      margin={{ top: 40, right: 50, bottom: 60, left: 50 }}
    />
  );
}

export default TierGraph;
