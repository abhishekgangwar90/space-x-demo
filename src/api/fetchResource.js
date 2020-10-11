import axios from "./index";

export const fetchResources = async (selectedResource) => {
  const response = await axios.get(`${selectedResource}`);
  return response;
};
