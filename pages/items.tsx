import {
  AnalyticalTable,
  Button,
  Input,
  DatePicker,
  TextAlign,
  VerticalAlign,
} from "@ui5/webcomponents-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";

interface TableRow {
  id: string;
  subItems?: TableRow[];
}

const Columns = [
  {
    Header: "ID",
    accessor: "id",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "BA",
    accessor: "contract",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "QT",
    accessor: "qt",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "IN",
    accessor: "in",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "BEG",
    accessor: "beg",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "P QT",
    accessor: "pqt",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "%",
    accessor: "percent",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "FRI 10 JUN 2024",
    accessor: "DATE1",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "FRI 10 JUN 2024",
    accessor: "DATE2",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "FRI 10 JUN 2024",
    accessor: "DATE3",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "FRI 10 JUN 2024",
    accessor: "DATE4",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "FRI 10 JUN 2024",
    accessor: "DATE5",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "FRI 10 JUN 2024",
    accessor: "DATE6",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
  {
    Header: "FRI 10 JUN 2024",
    accessor: "DATE7",
    disableResizing: true,
    hAlign: TextAlign.Center,
    vAlign: VerticalAlign.Middle,
  },
];

const ItemsPage: React.FC = () => {
  const [data, setData] = useState<TableRow[]>([]);

  useEffect(() => {
    fetch("/data/items.json")
      .then((response) => response.json())
      .then((data: TableRow[]) => setData(data));
  }, []);

  return (
    <>
      <Header hideOverview={true} />
      <div className="headerItems">
        <header className="headerTitle">
          <div className="parentTitle">
            <label htmlFor="contractNumber" className="subTitle">
              input
            </label>
            <span>123456789</span>
          </div>
          <div className="parentTitle">
            <label htmlFor="contractNumber" className="subTitle">
              input
            </label>
            <span>123456789</span>
          </div>
          <div className="parentTitle">
            <label htmlFor="contractNumber" className="subTitle">
              input
            </label>
            <span> DEC 22,2021</span>
          </div>
          <div className="parentTitle">
            <label htmlFor="contractNumber" className="subTitle">
              input
            </label>
            <span>123456789</span>
          </div>
        </header>
        <div className="inputStyle">
          <div className="parentInput">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontWeight: "bold",
              }}
            >
              <label htmlFor="contractNumber" style={{ color: "#556b81" }}>
                Contract Number:
              </label>
              <Input id="contractNumber" />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="createdBy"
                style={{ color: "#556b81", fontWeight: "bold" }}
              >
                Created On:
              </label>
              <Input id="createdBy" />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="createdOn"
                style={{ color: "#556b81", fontWeight: "bold" }}
              >
                Created By:
              </label>
              <DatePicker id="createdOn" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontWeight: "bold",
              }}
            >
              <label htmlFor="customerReference" style={{ color: "#556b81" }}>
                Customer Reference:
              </label>
              <Input id="customerReference" />
            </div>
          </div>

          <Button className="searchBtn">Search</Button>
        </div>
      </div>

      <div className="tableDiv">
        <AnalyticalTable
          columns={Columns}
          data={data}
          headerRowHeight={50}
          style={{ width: "100%" }}
          isTreeTable
          subRowsKey="subItems"
          selectionMode="Single"
          minRows={5}
        />
      </div>
    </>
  );
};

export default ItemsPage;
