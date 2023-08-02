'use client';

import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';

export default function Char() {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };

  const [series, setSeries] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setSeries([
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]);
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <Chart options={options} series={series} type="bar" width={500} />
    </section>
  );
}