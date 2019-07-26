const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

function setupJSDOM() {
  const { window } = new JSDOM(
    `<!doctype html>
  <html>
    <head>
      <script></script>
    </head>
    <body>
      <div id="app-root"></div>
    </body>
  </html>
  `,
    {
      userAgent: 'node.js',
      url: 'https://localhost/'
    }
  );

  // configure window for enzyme mount
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;
}

setupJSDOM();

