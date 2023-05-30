import { UserApi } from "@app/services/api/User";
import { useQuery } from "@tanstack/react-query";

const userApi = UserApi.getInstance();

const useGetUsers = (page: number, lang: string) => {
   return useQuery(
      ["user"],
      () => userApi.getUsers(page, lang),
   );
};

export default useGetUsers;
