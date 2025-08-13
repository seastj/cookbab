import { ResponsiveBar } from "@nivo/bar";
import MemberMessage from "./randommessage/MemberMessage";

const colors = [
  "#f7a2a2",
  "#f37373",
  "#ef4444",
  "#eb1515",
  "#bd1010",
  "#a33a3a",
];

const times = [
  "10분 미만",
  "10~30분",
  "30~60분",
  "1~2시간",
  "2~3시간",
  "3시간이상",
  "미지정",
];

function CookTimeGraph({ data }) {
  const filledData = times.map((time, idx) => {
    const found = data.find(d => d.time === time);
    return {
      time,
      value: found ? found.value : 0,
      color: colors[idx % colors.length],
    };
  });

  if (!filledData.some(d => d.value > 0)) {
    return (
      <p
        style={{
          marginTop: "50%",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          color: "#888",
        }}
      >
        <MemberMessage />
      </p>
    );
  }

  return (
    <ResponsiveBar
      data={filledData}
      indexBy="time"
      keys={["value"]}
      colors={({ index }) => colors[index % colors.length]}
      theme={{
        labels: { text: { fontSize: 20, fill: "#fff" } },
        axis: { ticks: { text: { fontSize: 13 } } },
      }}
      labelTextColor="#fff"
      borderColor={{ from: "color" }}
      margin={{ top: 40, right: 50, bottom: 60, left: 60 }}
      padding={0.2}
      axisLeft={{
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 0,
        format: value => (Number.isInteger(value) ? value : ""),
      }}
      axisBottom={{
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 40,
      }}
    />
  );
}

export default CookTimeGraph;
