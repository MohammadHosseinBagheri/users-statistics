import { useQuery } from "react-query";
import { httpRequest } from "../apis";
import { randomNumberGenerator } from "../utils/common";

export const useGetUsers = () => {
  return useQuery("all-users", () =>
    httpRequest(
      "GET",
      `/api/?results=${randomNumberGenerator(10, 100)}`,
      null,
      {}
    )
  );
};
