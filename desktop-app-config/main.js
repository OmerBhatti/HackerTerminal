//Desktop App by faatehsultan.github.io for HackerTerminal of omerbhatti.github.io

const electron = require('electron');


const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    useContentSize: true,
    autoHideMenuBar: true,
    icon: "favicon.png",
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

