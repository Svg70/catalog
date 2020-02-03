import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import "./index.css";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class FixedTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Управляющий",
              columns: [
                {
                  Header: "Год",
                  

                },
                {
                  Header: "Кассир",
                  accessor: "firstName",
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                }
              ]
            }
          ]}
          defaultPageSize={20}
          style={{
            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}
export default FixedTable