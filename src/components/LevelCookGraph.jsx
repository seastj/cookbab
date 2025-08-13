import { ResponsivePie } from "@nivo/pie";
import MemberMessage from "./randommessage/MemberMessage";

function LevelCookGraph({ data }) {
  if (!data) return null;

  const processedData = [];
  let etcValue = 0;
  data.forEach(({ id, label, value, color }) => {
    if (value <= 2) {
      etcValue += value;
    } else {
      processedData.push({ id, label, value, color });
    }
  });
  if (etcValue)
    processedData.push({
      id: "좋은재료",
      label: "좋은재료",
      value: etcValue,
      color: "#f37373",
    });

  if (!processedData.some(d => d.value > 0)) {
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
  return data?.some(d => d.value > 0) ? (
    <ResponsivePie
      data={processedData}
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
      arcLabelsTextColor="#fff"
      theme={{ labels: { text: { fontWeight: "bold", fontSize: "16px" } } }}
      motionConfig={{
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
      }}
    />
  ) : (
    <p
      style={{
        marginTop: "150px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        color: "#888",
      }}
    >
      <MemberMessage />
    </p>
  );
}

export default LevelCookGraph;
