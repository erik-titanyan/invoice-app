import { handleApiRequest } from "./api.utils";

export const getUsers = async (): Promise<any> => {
  return await handleApiRequest("/users");
};

export const getInvoices = async (): Promise<any> => {
  return await handleApiRequest("/invoices");
};

export const getInvoiceLines = async (): Promise<any> => {
  return await handleApiRequest("/invoiceLines");
};

export const getProducts = async (): Promise<any> => {
  return await handleApiRequest("/products");
};
