import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";

function CategoryGraph() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("/CategoryData.json");
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
      sortByValue={true}
      colors={{ datum: "data.color" }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      enableArcLinkLabels={false}
      arcLinkLabel={e => `${e.id} (${e.value})`}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#473838"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ theme: "background" }}
      arcLabel={e => (e.value > 4 ? `${e.id} (${e.value})` : "")}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#ffffff"
    />
  );
}

export default CategoryGraph;
