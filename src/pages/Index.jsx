import React from "react";

const Index = () => {
  // ... existing Index component code, ensure to include collapseDataTable function within

function collapseDataTable(data) {
    const newDataTable = [];
    const groupedData = {};

    data.forEach((row) => {
      const key = `${row["CartKey"]}_${row["Location"]}_${row["Qty"]}`;
      if (!groupedData[key]) {
        groupedData[key] = { ...row, combinedRows: 1 };
      } else {
        // If 'Qty' matches, combine the rows
        if (groupedData[key]["Qty"] === row["Qty"]) {
          groupedData[key].combinedRows += 1;
        } else {
          // If 'Qty' does not match, keep the row distinct
          newDataTable.push(row);
        }
      }
    });

    // Add grouped rows to the final data table
    for (const key in groupedData) {
      if (groupedData[key].combinedRows > 1) {
        newDataTable.push(groupedData[key]);
      }
    }

    // Sort by CartKey and Location for consistent ordering
    newDataTable.sort((a, b) => {
      const cartKeyComparison = a["CartKey"].localeCompare(b["CartKey"]);
      if (cartKeyComparison !== 0) return cartKeyComparison;
      return a["Location"].localeCompare(b["Location"]);
    });

    return newDataTable;
  }

  return <div>{/* The rest of your component's rendering logic will go here */}</div>;
};

export default Index;
