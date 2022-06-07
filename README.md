# Eliseo Badillo Submission - Ruggable Front-End Assessment (Ops Tech)

## Setup
- Ensure Node is installed
  - ~ v16.14.2
- Ensure yarn is installed
  - ~ v1.22.18
- Run `yarn install`
- Run `yarn start`
  - You browser should open to `http://localhost:3000/`

## Automated Tests
- Run `yarn test`

## Usage
- Input target Github user
  - E.g. "facebook"
- Press `Enter` or click on the "Search" button
- Observe the result set

## Potential Improvements
With additional time, I would have liked to implemented or improved the folowing:
- Display and sort on more fields on the Github repos
  - E.g. Number of forks or issues.
- Paginate results in the table, as some github users (Google) have A LOT of repositories. Sorting and rendering massive amounts of repositories is not very performant
- Potentially setup an authenticated client with Github to deal with the default rate limiting of 60 req/hr.
  - Along a similar train of thought here, implementing exponential backoff, but a backoff at an hour time scale might not be worth the effort.
- Iterate on UI improvements. Material UI makes things acceptable, but there is definite room for improvement.
- Implement a more sophisticated logging and error handling workflow, as the current approach simply logs errors to the console.
- Real time search and update of results. I attempted this solution for a little while, but did not find it useful
  - Seemed to increase the chances of running into rate limiting.
  - Debouncing would add complexity for a small win in functionality
