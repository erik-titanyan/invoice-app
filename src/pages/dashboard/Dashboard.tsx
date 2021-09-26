import {
  Text,
  SelectionMode,
  ShimmeredDetailsList,
  Stack,
} from "@fluentui/react";
import React, { useEffect, useRef, useState } from "react";
import { Selection } from "@fluentui/react/lib/Selection";

import {
  getInvoiceLines,
  getInvoices,
  getProducts,
} from "../../config/api/config";
import { dashboardMainStack } from "./dashboard.styles";
import { _columnsForInvoices, _columnsForLines } from "./dashboard.utils";
import { IInvoiceData, IInvoiceLines, IProducts } from "./dashboard.types";

const Dashboard: React.FC = () => {
  const [invoices, setInvoices] = useState([]);
  const [invoiceLinesColumnsData, setInvoiceLinesColumnsData] = useState([]);
  const [invoiceLinesWholeColumnsData, setInvoiceLinesWholeColumnsData] =
    useState<any>();
  const [hideSelection, setHideSelection] = useState(true);

  const { current: selection } = useRef(
    new Selection({
      onSelectionChanged: () => {
        if (selection.getSelectedCount() === 0) {
          setHideSelection(true);
        } else {
          setHideSelection(false);
        }
      },
    })
  );

  const user = localStorage.getItem("autorizedUser");

  useEffect(() => {
    (async function () {
      const invoicesResponse = await getInvoices();
      const invoiceLinesResponse = await getInvoiceLines();
      const productsResponse = await getProducts();

      const filtered = invoicesResponse.value.filter(
        (i: IInvoiceData) => user === i.UserId
      );
      const transformedArray = filtered.map((i: IInvoiceData) => {
        const invoiceLines = createInvoiceLinesData(
          i,
          invoiceLinesResponse.value,
          productsResponse.value
        );
        setInvoiceLinesWholeColumnsData((prev: IInvoiceLines) => ({
          ...prev,
          [i.InvoiceId]: invoiceLines,
        }));
        const Total = invoiceLines.reduce(
          (acc: number, i: any) => acc + i.Total,
          0
        );
        return {
          ...i,
          Total,
        };
      });
      setInvoices(transformedArray);
    })();
  }, [user]);

  const createInvoiceLinesData = (
    item: IInvoiceData,
    invoiceLines: IInvoiceLines[],
    products: IProducts[]
  ) => {
    const filteredInvoiceLines = invoiceLines.filter(
      (i: IInvoiceLines) => i.InvoiceId === item.InvoiceId
    );

    const tranformedLines = filteredInvoiceLines.map((i: IInvoiceLines) => {
      const filtered = products.find(
        (product: IProducts) => product.ProductId === i.ProductId
      );
      if (filtered) {
        return {
          ...filtered,
          Quantity: i.Quantity,
          Total: filtered.Price * i.Quantity,
          InvoiceId: i.InvoiceId,
        };
      }
      return null;
    });

    return tranformedLines;
  };

  const invoiceChangeHandler = (item: IInvoiceData) => {
    setInvoiceLinesColumnsData(invoiceLinesWholeColumnsData[item.InvoiceId]);
  };

  return (
    <Stack styles={dashboardMainStack} tokens={{ childrenGap: 24 }}>
      <Stack.Item>
        <Text variant="large">Invoices</Text>
        <ShimmeredDetailsList
          items={invoices}
          columns={_columnsForInvoices}
          enableShimmer={!invoices.length}
          selectionMode={SelectionMode.single}
          selection={selection}
          onActiveItemChanged={invoiceChangeHandler}
          shimmerLines={5}
        />
      </Stack.Item>
      <Stack.Item>
        <Text variant="large">Invoice Lines</Text>
        <ShimmeredDetailsList
          items={invoiceLinesColumnsData}
          columns={_columnsForLines}
          enableShimmer={hideSelection}
          selectionMode={SelectionMode.none}
          shimmerLines={5}
        />
      </Stack.Item>
    </Stack>
  );
};

export default Dashboard;
