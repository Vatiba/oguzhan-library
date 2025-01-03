import { Languages } from "@app/types";
import { INS, OrderDirection } from "../../Common";

type TutorialGetDto = {
  subject: string;
  faculty: string;
  department: string;
  major_years__major: string;
  major_years__year: string;
  ordering: string;
  orderDirection: OrderDirection;
  lang: string;
  search: string;
  page: number;
  year: number | string;
};

export default TutorialGetDto;
