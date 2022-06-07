import axios from "axios";
import { searchUserRepos } from "./github";

jest.mock("axios");

test("properly paginates through all repos", async () => {
  const responseData = Array(100).fill(null);
  (axios.get as jest.Mock).mockResolvedValueOnce({ data: responseData });
  (axios.get as jest.Mock).mockResolvedValueOnce({ data: [] });
  const [, results] = await searchUserRepos("");
  expect(axios.get).toHaveBeenCalledTimes(2);
  expect(results).toEqual(responseData);
});

test("returns error properly", async () => {
  (axios.get as jest.Mock).mockRejectedValueOnce("failed");
  const [err] = await searchUserRepos("");
  expect(err).toEqual("failed");
});
