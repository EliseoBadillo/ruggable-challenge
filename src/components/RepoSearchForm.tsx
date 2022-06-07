import SearchIcon from "@mui/icons-material/Search";
import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import RepoList, { GithubRepo } from "./RepoList";
import { searchUserRepos } from "../services/github";

const RepoSearchForm = () => {
  const [githubUser, setGithubUser] = useState("");
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSearching(true);
    const [err, repos] = await searchUserRepos(githubUser);
    if (err) {
      console.error(err);
    } else {
      setRepos(repos as GithubRepo[]);
    }
    setIsSearching(false);
  };

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "xs",
      }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            id="github-user"
            name="github-user"
            label="Github User"
            required
            autoFocus
            value={githubUser}
            onChange={(event) => {
              setGithubUser(event.target.value);
            }}
            data-testid="input-github-user"
          />
          <LoadingButton
            type="submit"
            color="primary"
            startIcon={<SearchIcon />}
            loading={isSearching}
            loadingPosition="start"
            data-testid="button-submit"
          >
            Search
          </LoadingButton>
        </Box>
      </Box>
      <RepoList repos={repos} />
    </Container>
  );
};

export default RepoSearchForm;
