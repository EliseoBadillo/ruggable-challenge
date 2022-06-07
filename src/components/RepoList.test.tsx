import { render } from "@testing-library/react";
import RepoList from "./RepoList";

const repos = [
  {
    id: 1,
    name: "repo1",
    stargazers_count: 1,
  },
  {
    id: 2,
    name: "repo2",
    stargazers_count: 2,
  },
  {
    id: 3,
    name: "repo3",
    stargazers_count: 3,
  },
];

test("shows all repos passed in", () => {
  const { getByText } = render(<RepoList repos={repos} />);
  expect(getByText(repos[0].name)).toBeInTheDocument();
  expect(getByText(repos[0].stargazers_count)).toBeInTheDocument();
  expect(getByText(repos[1].name)).toBeInTheDocument();
  expect(getByText(repos[1].stargazers_count)).toBeInTheDocument();
  expect(getByText(repos[2].name)).toBeInTheDocument();
  expect(getByText(repos[2].stargazers_count)).toBeInTheDocument();
});

test("shows repos in correct order", () => {
  const { getAllByTestId } = render(<RepoList repos={repos} />);
  const repoNameCells = getAllByTestId("repo-name");
  expect(repoNameCells[0].textContent).toEqual(repos[2].name);
  expect(repoNameCells[1].textContent).toEqual(repos[1].name);
  expect(repoNameCells[2].textContent).toEqual(repos[0].name);
});

test("shows no results if repos are empty", () => {
  const { getByText } = render(<RepoList repos={[]} />);
  expect(getByText("No results")).toBeInTheDocument();
});
