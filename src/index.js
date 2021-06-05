import {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
  QIcon,
  QLineEdit,
} from '@nodegui/nodegui';
const fs = require('fs');

const win = new QMainWindow();
win.setWindowTitle('Hereford');
// win.resize(400, 200);

const centralWidget = new QWidget();
centralWidget.setObjectName('myroot');
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

const appTitle = new QLabel();
appTitle.setObjectName('appTitle');
appTitle.setText('Hereford');

rootLayout.addWidget(appTitle);

//
const writeFileButton = new QPushButton();
writeFileButton.setText('Write to file');

const marathonSetup = new QWidget();
const marathonSetupLayout = new FlexLayout();
marathonSetup.setObjectName('marathonSetup');
marathonSetup.setLayout(marathonSetupLayout);

const marathonSetupInputs = new QWidget();
const marathonSetupInputsLayout = new FlexLayout();
marathonSetupInputs.setObjectName('marathonSetupInputs');
marathonSetupInputs.setLayout(marathonSetupInputsLayout);

const marathonTextInput = new QLineEdit();

const marathonTextLabel = new QLabel();
marathonTextLabel.setText('Enter Oengus or Horaro URL');
marathonSetupInputsLayout.addWidget(marathonTextInput);

const marathonSubmit = new QPushButton();
marathonSubmit.setText('Fetch marathon');
marathonSubmit.addEventListener('clicked', () => {
  let urlData = marathonTextInput.text();
  console.log(urlData);

  urlData = urlData.toLowerCase();

  console.log(urlData.includes('horaro'));
  console.log(urlData.split('/'));

  if (urlData.includes('oengus')) {
  } else if (urlData.includes('horaro')) {
  } else {
    // err
  }

  // Horaro
  //API example URL: https://horaro.org/-/api/v1/events/uksg/schedules/uksgwin21
  //HORARO example url https://horaro.org/uksg/uksgwin21

  // Oengus
  // https://oengus.io/api/marathons/bsgo5/schedule

  // fetch run
});
marathonSetupInputsLayout.addWidget(marathonSubmit);

marathonSetupLayout.addWidget(marathonTextLabel);
marathonSetupLayout.addWidget(marathonSetupInputs);

//
const nextRunButton = new QPushButton();
nextRunButton.setText('Next run');

const silentNextRunButton = new QPushButton();
silentNextRunButton.setText('Silent next run');

const previousRunButton = new QPushButton();
previousRunButton.setText('Previous run');

const jumpRunButton = new QPushButton();
jumpRunButton.setText('Jump to run');

const silentJumpRunButton = new QPushButton();
silentJumpRunButton.setText('Silent jump to run');

const startMarathonButton = new QPushButton();
startMarathonButton.setText('Back to start');

const reloadRunsButton = new QPushButton();
reloadRunsButton.setText('Reload runs');

const loadNextDeckButton = new QPushButton();
loadNextDeckButton.setText('Next deck');

writeFileButton.addEventListener('clicked', () => {
  console.log('aaaa');
});

const button2 = new QPushButton();
button2.setText('Click me');
button2.addEventListener('clicked', () => {
  console.log('the button was clicked');

  fs.writeFile('newfile.txt', 'Learn Node FS module', (err) => {
    if (err) throw err;
    console.log('File is created successfully.');
  });

  fs.create;
});

rootLayout.addWidget(marathonSetup);

// rootLayout.addWidget(writeFileButton);
// rootLayout.addWidget(button2);

//
rootLayout.addWidget(nextRunButton);
rootLayout.addWidget(silentNextRunButton);
rootLayout.addWidget(previousRunButton);
rootLayout.addWidget(jumpRunButton);
rootLayout.addWidget(silentJumpRunButton);
rootLayout.addWidget(startMarathonButton);
rootLayout.addWidget(reloadRunsButton);
rootLayout.addWidget(loadNextDeckButton);

win.setCentralWidget(centralWidget);
win.setStyleSheet(
  `
    #myroot {
      padding: 8px;

      height: '100%';
      width: '100%';
    }

    #appTitle {
      font-size: 48px;
      font-weight: bold;
      color: black;
      margin-bottom: 8px;
    }

    #fieldsetLayout {
      flex-direction: row;
    }

    #marathonSetup {
      margin-bottom: 8px;
    }

    #marathonSetupInputs {
      flex-direction: row;
    }
  `
);
win.show();

global.win = win;
