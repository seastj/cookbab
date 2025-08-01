import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";

function MonthCookGraph() {
  // js 자리
  const [data, setData] = useState([]);
  // 데이터 부르는 함수 만들기
  const getData = async () => {
    try {
      // fetch 를 이용한 데이터 호출
      const res = await fetch("/MonthCookData.json");
      const json = await res.json();
      // 데이터 갱신
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // jsx 자리

  return (
    <div
      style={{
        padding: "20px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        colors={{ datum: "color" }}
        margin={{ top: 10, right: 20, bottom: 30, left: 30 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisBottom={{ legend: "", legendOffset: 36 }}
        axisLeft={{ legend: "", legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        // 오른쪽 요리횟수 삭제처리
        // legends={[
        //   {
        //     anchor: "bottom-right",
        //     direction: "column",
        //     translateX: 100,
        //     itemWidth: 80,
        //     itemHeight: 22,
        //     symbolShape: "circle",
        //   },
        // ]}
      />
    </div>
  );
}

export default MonthCookGraph;
