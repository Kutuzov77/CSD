import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import cellEditFactory,{Type} from 'react-bootstrap-table2-editor'
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter'
const Table = () => {

  useEffect(() => {
    
    async function getData(callback) {
      
      const res = await axios.get("https://jsonplaceholder.typicode.com/comments");

      callback(res, function (ans) {
        setData(ans);
       

      })
    }

    getData((res, callback) => {
      const ans = res.data;
      callback(ans);
    })
  }, []);

  


  const [data, setData] = useState([]);
  console.log(data);
  const emailFormatter = (data, row) => {
    return <>
    Email = {data}  
    </>
  }
  
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    clickToEdit: true,
  }
  const columns = [{
    dataField: "email",
    text: "Email",
    sort: true,
    formatter: emailFormatter,


  },
  {
    dataField: "postId",
    text: "Product ID",
    sort: true,
      filter: textFilter(),
    validator: (newValue, row, col) => {
      if (isNaN(newValue)) {
        return {
          valid: false,
          message: "Please enter numeric value"
        }
      }
      return true;
    }
    
    },
   {
    dataField: "name",
     text: "Name",
    sort: true,
     editable: false,
    

  }]
  
  return (
    <div>
      <BootstrapTable keyField='id'
        data={data}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({
          mode: "dbclick",
          blurToSave: true,
          nonEditableRows: () => [1],
          
        })}
        selectRow={selectRow}
        filter = {filterFactory()}
      />
    </div>
  )
}

export default Table
