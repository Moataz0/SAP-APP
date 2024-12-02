import { useEffect, useState } from "react";
import { AnalyticalTable  } from "@ui5/webcomponents-react";

// Define types for the table rows
interface TableRow {
  id: string;
  name: string;
  subItems?: TableRow[];
}

const TreeTableComponent: React.FC = () => {
  const [data, setData] = useState<TableRow[]>([]);
  const tableColumns = [
    {
      Header: "ID",
      accessor: "ID" // String-based value accessors!
    },
    {
      Header: "BA",
      accessor: "BA"
    },
    {
      Header: "QT",
      accessor: "QT"
    },
    {
      Header: "IN",
      accessor: "IN"
    },
    {
      Header: "P QT",
      accessor: "PQT"
    },
    {
      Header: "%",
      accessor: "PERCENT"
    },
    {
      Header: "FRI 10 JUN 2024",
      accessor: "DATE1"
    },
    {
      Header: "FRI 10 JUN 2024",
      accessor: "DATE2"
    },
    {
      Header: "FRI 10 JUN 2024",
      accessor: "DATE3"
    },
    {
      Header: "FRI 10 JUN 2024",
      accessor: "DATE4"
    },
    {
      Header: "FRI 10 JUN 2024",
      accessor: "DATE5"
    },
    {
      Header: "FRI 10 JUN 2024",
      accessor: "DATE6"
    },
    {
      Header: "FRI 10 JUN 2024",
      accessor: "DATE7"
    },
    
  ];
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((jsonData: TableRow[]) => setData(jsonData));
  }, []);

  return (
    <AnalyticalTable 
      data={data}
      isTreeTable={true}
      columns={tableColumns}
      headerRowHeight={50}
      selectionMode="Single" // Allow single row selection
      subRowsKey="subItems" // Key for nested data
    />
  );
};

export default TreeTableComponent;
