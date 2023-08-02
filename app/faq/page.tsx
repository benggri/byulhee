'use client';

import axios from 'axios';
import {useState, useRef, useEffect, useMemo} from 'react';
import AgGrid from '../../src/components/ag_grid';

export default function Faq() {

  const gridRef = useRef<any>(null); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // aggrid row data

  // aggrid column info
  const [columnDefs, setColumnDefs] = useState([
      {field: 'index'    , headerName : 'index'    , filter: true, resizable: true , hide: false},
      {field: 'title'    , headerName : 'Title'    , filter: true, resizable: true , hide: false},
      {field: 'contents' , headerName : 'Contents' , filter: true, resizable: true , hide: false},
      {field: 'date'     , headerName : 'Date'     , filter: true, resizable: true , hide: false},
  ]);

  const [style, setStyle] = useState({
    height: '100%',
    width: '100%',
  });

  const defaultColDef = useMemo(() => ({
      flex: 1,
      resizable: true,
      sortable: true,
      wrapText: true,
      autoHeight: true
  }), []);

  const getData = () => {
      axios.get(`/api/faq`)
           .then(res => setRowData(res.data));
  }

  useEffect(() => {
      getData();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4">
        <p className="text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">FAQ</p>
      </div>
      <div className="px-6 h-96 min-h-96 max-h-96">
        <AgGrid gridRef={gridRef} rowData={rowData} columnDefs={columnDefs} defaultColDef={defaultColDef} />
      </div>
    </section>
  );
}