import React, { useEffect, useState } from "react";
import { fetchResources } from "../../api/fetchResource";

export const useApiData = (selectedResource) => {
  const [resources, updateState] = useState([]);

  const fetchData = async () => {
    const response = await fetchResources(selectedResource);
    updateState(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [selectedResource]);

  return resources;
};
