'use client';

import axios from 'axios';
import {useEffect, useState} from 'react';
import PresidentTimeLine from "../../../../src/components/learn/history/president/PresidentTimeLine";

export default function LearnHistoryPresident() {
  const [area, setArea] = useState('korea');
  const [dataList, setDataList] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`/api/applications/learn/history/${area}/president-list`)
         .then((res) => setDataList(res.data));
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
        <p className="text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">List of past presidents of Korea</p>
      </div>
      <div className="inline-flex items-cneter justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
      </div>
      <div className="w-80 sm:w-96 md:w-48 lg:w-1/2 h-full mx-auto">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {dataList.map((data:any, index:number) => <PresidentTimeLine key={index} {...data} />)}
        </ol>
      </div>
    </section>
  );
}
