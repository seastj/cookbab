import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";

function MonthCookGraph({ monthlyCounts }) {
  // js 자리
  const dataCounts = monthlyCounts || {};

  const year = new Date().getFullYear().toString();
  const allMonths = Array.from({ length: 12 }, (_, i) => {
    const month = (i + 1).toString().padStart(2, "0");
    return `${year}-${month}`;
  });

  // 누락된 달은 0으로 채움
  const filledData = allMonths.map(month => ({
    x: month,
    y: dataCounts[month] || 0,
  }));

  const data = [
    {
      id: "요리 게시물 수",
      color: "#EF4444",
      data: filledData,
    },
  ];

  const maxY = Math.ceil(Math.max(...filledData.map(d => d.y)));
  const maxYAdjusted = maxY % 2 === 0 ? maxY : maxY + 1; // 최대값이 짝수인지 맞춤
  const ticks = Array.from(
    { length: Math.floor(maxYAdjusted / 2) + 1 },
    (_, i) => i * 1,
  );

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
        axisBottom={{
          legend: "",
          legendOffset: 36,
          format: value => {
            const monthNumber = parseInt(value.slice(5), 10);
            return `${monthNumber}월`;
          },
        }}
        axisLeft={{
          legend: "",
          legendOffset: -40,
          tickValues: ticks,
          format: value => value,
        }}
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
