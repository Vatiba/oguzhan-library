const baseUrl =
  import.meta.env.MODE === "development"
    ? "http://172.11.10.5/api"
    : "http://172.11.10.5/api";

export default baseUrl;
