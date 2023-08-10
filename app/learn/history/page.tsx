'use client';

import axios from 'axios';
import {useEffect, useState} from 'react';

export default function LearnHistory() {
  const [dataList, setDataList] = useState<HistoryObj[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('/api/applications/learn/history/korea_history_list')
         .then((res) => setDataList(res.data));
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
        <p className="text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">History of Korea</p>
      </div>
      <div className="inline-flex items-cneter justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
      </div>
      <div className="w-80 sm:w-96 md:w-48 lg:w-1/2 h-full mx-auto">
        <ol className="space-y-4">
          {
            dataList.map((data, index) => <HistoryTimeStepper key={`history_step_${index}`} {...data} />)
          }
          <li>
            <div className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
              <div className="flex items-center justify-between">
                <span className="sr-only">User info</span>
                <h3 className="font-medium">1. User info</h3>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
              </div>
            </div>
          </li>
          <li>
            <div className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400" role="alert">
              <div className="flex items-center justify-between">
                <span className="sr-only">Social accounts</span>
                <h3 className="font-medium">3. Social accounts</h3>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

interface HistoryObj {
  name: string;
  year: Array<string> | string[];
  children: Array<HistoryObj> | HistoryObj[] | undefined | null;
}

function HistoryTimeStepper({
  name,
  year,
  children
}:HistoryObj) {
  const color = year[1] ? 'green' : 'blue';
  return (
    <li>
      <div className={`w-full p-4 text-${color}-700 border border-${color}-300 rounded-lg bg-${color}-50 dark:bg-gray-800 dark:border-${color}-800 dark:text-${color}-400`} role="alert">
        <div className="flex items-center justify-between">
          <span className="sr-only">{name}</span>
          <h3 className="font-medium">{name} ({year.join(' ~ ')})</h3>
          {
            year[1] ?
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg> :
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          }
        </div>
        {
          children ?
          <div className={`w-full grid grid-cols-${children.length}`}>
            {children.map((child, index) => <div key={`history_child_${index}`} className='text-sm font-semibold text-gray-500 dark:text-gray-300'><p>{child.name}</p><p>{child.year.join('~')}</p></div>)}
          </div> :
          <div></div>
        }
      </div>
    </li>
  );
}
