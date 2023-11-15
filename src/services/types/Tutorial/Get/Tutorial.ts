import { Department, INS } from "../../Common";

type Tutorial = {
  id: number;
  name: string;
  slug: string;
  file: string;
  year: string;
  author: string;
  department: Department;
  date_created: string;
  subject: INS;
};

export default Tutorial;
