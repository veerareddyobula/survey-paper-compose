# survey-paper-compose
Description : Sample node.js+React.js Docker enabled application.
## Techstack Details
### Client --
  1) react.js
  2) reddux
  3) react-redux
  4) redux-thunk (middleware)
  5) formik
  6) yup validation
  7) material-ui
### Server --
  1) Express.js
  2) Loki.js (Inmemory database)

## Functionality Details -
1) By default view displays list of questions, if present.
2) Allows user to add/edit new question <br />
  a) For add/edit question app loads modal window <br />
  b) Using YUP validator question field require condition is handled. <br />
  c) YUP validator restrits to add one or more options to each question. <br />
  d) YUP validator restricts to select answers for each question. <br />

## Setting up the environment
### Using Docker
1) Download & install docker
2) git clone https://github.com/veerareddyobula/survey-paper-compose.git
3) cd survey-paper-compose
4) docker-compose build
5) docker-compose up
6) open http://localhost:3000

### Without Docker
1) git clone https://github.com/veerareddyobula/survey-paper-compose.git
2) cd survey-server <br />
  a) npm install <br />
  b) npm start <br />
3) cd survey-client <br />
  a) npm install <br />
  b) open package.json update proxy key value with http://localhost:3002 <br />
  c) npm start <br />
  d) open http://localhost:3000 <br />
  

