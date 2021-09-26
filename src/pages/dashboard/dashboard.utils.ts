import { IInvoiceData } from "./dashboard.types";
import { IColumn } from "@fluentui/react";

export const _columnsForInvoices: IColumn[] = [
  {
    key: "column1",
    name: "Invoice Name",
    fieldName: "Name",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    sortAscendingAriaLabel: "Sorted A to Z",
    sortDescendingAriaLabel: "Sorted Z to A",
    isSortedDescending: false,
  },
  {
    key: "column2",
    name: "Paid Date",
    fieldName: "PaidDate",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    onRender: (item: IInvoiceData) => {
      return new Date(item.PaidDate).toLocaleDateString();
    },
  },
  {
    key: "column6",
    name: "Total Amount",
    fieldName: "Total",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
];

export const _columnsForLines: IColumn[] = [
  {
    key: "column3",
    name: "Product",
    fieldName: "Name",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    sortAscendingAriaLabel: "Sorted A to Z",
    sortDescendingAriaLabel: "Sorted Z to A",
    isSortedDescending: false,
  },
  {
    key: "column4",
    name: "Price Per Unit",
    fieldName: "Price",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column5",
    name: "Quantity",
    fieldName: "Quantity",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column6",
    name: "Total Amount",
    fieldName: "Total",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  },
];
