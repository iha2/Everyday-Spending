import * as React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { ChartDataSets } from "chart.js";

export type MerchantProps = {
  labels: string[];
  datasets: ChartDataSets[];
  // data: ReactChartData<ChartData>
};

const MerchantComponent: React.StatelessComponent<MerchantProps> = ({
  labels,
  datasets
}: MerchantProps) => (
  <React.Fragment>
    <HorizontalBar
      data={{ labels, datasets }}
      options={{ legend: { display: false } }}
    />
  </React.Fragment>
);

export const Merchant = MerchantComponent;
