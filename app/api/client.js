import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.52:9000/api",
});

export default apiClient;
