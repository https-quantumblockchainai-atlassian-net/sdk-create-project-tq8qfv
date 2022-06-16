import sdk from '@stackblitz/sdk';
import './styles.css';

// Create the index.ts file
const code = `import moment from 'moment';

document.getElementById('time').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
`;

// Create the index.html file
const html = `<h1>I was created on <span id='time'></span></h1>`;

// Create the project payload.
const project = {
  files: {
    'index.ts': code,
    'index.html': html,
  },
  title: 'Dynamically Generated Project',
  description: 'Created with <3 by the StackBlitz SDK!',
  template: 'typescript',
  dependencies: {
    moment: '*', // * = latest version
  },
};

// Method to open project in new window
window['openNewProject'] = () => {
  sdk.openProject(project);
};

// Method to embed this project
window['embedNewProject'] = () => {
  sdk.embedProject('myDiv', project, { height: 320 });
};
