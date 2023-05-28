import { UserApi } from "@app/services/api/User";
import { useQuery } from "@tanstack/react-query";

const userApi = UserApi.getInstance();

const useGetUsers = (id: number, lang: string) => {
   return useQuery(
      ["user"],
      () => userApi.getUsers(id, lang),
   );
};

export default useGetUsers;
