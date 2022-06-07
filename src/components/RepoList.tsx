import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FunctionComponent } from "react";

export interface GithubRepo {
  id: number;
  name: string;
  stargazers_count: number;
}

interface RepoListProps {
  repos: Array<GithubRepo>;
}

const RepoList: FunctionComponent<RepoListProps> = ({ repos }) => {
  const sortedRepos = [...repos].sort(
    (repoA, repoB) => repoB.stargazers_count - repoA.stargazers_count
  );
  return repos.length ? (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Repository Name</TableCell>
            <TableCell align="right">Number of Stars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRepos.map((repo) => (
            <TableRow key={repo.id}>
              <TableCell data-testid="repo-name">{repo.name}</TableCell>
              <TableCell align="right">{repo.stargazers_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Box>No results</Box>
  );
};

export default RepoList;
