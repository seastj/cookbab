import { ResponsiveBar } from "@nivo/bar";
import MemberMessage from "./randommessage/MemberMessage";

function TierGraph({ data }) {
  const colors = ["#bd1010", "#f7a2a2", "#f37373", "#ef4444", "#eb1515"];
  const maxCount = Math.max(...data.map(d => d.count));
  const tickValues = [];
  for (let i = 0; i <= maxCount + 1; i += 1) {
    tickValues.push(i);
  }

  if (!data.some(d => d.count > 0)) {
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
      data={data}
      indexBy="level"
      keys={["count"]}
      colors={({ index }) => colors[index % colors.length]}
      theme={{
        labels: { text: { fontSize: 20, fill: "#fff" } },
        axis: { ticks: { text: { fontSize: 15 } } },
      }}
      labelTextColor="#fff"
      borderColor={{ from: "color" }}
      margin={{ top: 40, right: 50, bottom: 60, left: 50 }}
      padding={0.3}
      axisLeft={{
        tickValues,
        format: v => (Number.isInteger(v) ? v : null),
      }}
    />
  );
}

export default TierGraph;
