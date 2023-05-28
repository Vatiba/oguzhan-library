import { UserApi } from "@app/services/api/User";
import { useQuery } from "@tanstack/react-query";

const userApi = UserApi.getInstance();

const useGetUsers = (id: number) => {
   return useQuery(
      ["user"],
      () => userApi.getUsers(id),
   );
};

export default useGetUsers;
