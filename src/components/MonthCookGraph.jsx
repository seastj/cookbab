import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";

function Line() {
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
    <div>
      <div style={{ width: 530, height: 480 }}>
        <ResponsiveLine /* or Line for fixed dimensions */
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
    </div>
  );
}

export default Line;
