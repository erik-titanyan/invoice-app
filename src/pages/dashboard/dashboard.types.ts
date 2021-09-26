export interface IInvoiceData {
  UserId: string;
  InvoiceId: string;
  InvoiceName: string;
  PaidDate: Date;
  Total: number;
}

export interface IInvoiceLines extends IInvoiceData {
  Quantity: number;
  ProductId: string;
}

export interface IProducts {
  Name: string;
  Price: number;
  ProductId: string;
}
