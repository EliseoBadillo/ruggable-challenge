import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { searchUserRepos } from "../services/github";
import RepoSearchForm from "./RepoSearchForm";

jest.mock("../services/github", () => ({
  searchUserRepos: jest.fn(),
}));

test("shows search button", () => {
  const { getByTestId } = render(<RepoSearchForm />);
  expect(getByTestId("button-submit")).toBeInTheDocument();
});

test("shows Github user input", () => {
  const { getByTestId } = render(<RepoSearchForm />);
  expect(getByTestId("input-github-user")).toBeInTheDocument();
});

test("correctly calls github service on search", async () => {
  const { getByTestId, getByRole } = render(<RepoSearchForm />);
  (searchUserRepos as jest.Mock).mockResolvedValueOnce([null, []]);
  userEvent.click(getByRole("textbox", { name: "Github User" }));
  userEvent.keyboard("facebook");
  userEvent.click(getByTestId("button-submit"));
  expect(searchUserRepos as jest.Mock).toHaveBeenCalledWith("facebook");
});
