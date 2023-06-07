import { UserApi } from "@app/services/api/User";
import { useQuery } from "@tanstack/react-query";

const userApi = UserApi.getInstance();

const useGetUsers = (page: number, lang: string) => {
   return useQuery(
      ["user"],
      () => userApi.getUsers(page, lang),
      {
         staleTime: 1000 * 60,
      }
   );
};

export default useGetUsers;
