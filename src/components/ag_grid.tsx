import {AgGridReact} from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

export default function AgGrid({
  gridRef,
  rowData,
  columnDefs,
  defaultColDef
} : {
  gridRef : any;
  rowData : any;
  columnDefs : any;
  defaultColDef : any;
}) {
  return (
    <div className="ag-theme-alpine" style={{height: '100%', width: '100%'}}>
      <AgGridReact ref={gridRef}
                   rowData={rowData} // Row Data for Rows
                   columnDefs={columnDefs} // Column Defs for Columns
                   animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                   rowSelection='single' // Options - allows click selection of rows 'single' , 'multiple'
                   defaultColDef={defaultColDef} // Default Column Properties
      />
    </div>
  );
}