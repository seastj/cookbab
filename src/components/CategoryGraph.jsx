import { ResponsivePie } from "@nivo/pie";
import MemberMessage from "./randommessage/MemberMessage";

function CategoryGraph({ data }) {
  return data.some(d => d.value > 0) ? (
    <ResponsivePie
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
      arcLabel={e => (e.value > 0 ? `${e.id} (${e.value})` : "")}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#ffffff"
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

export default CategoryGraph;
