const { app, BrowserWindow } = require('electron')
  
  function createWindow () {   
    win = new BrowserWindow({ width: 800, height: 600})
    win.webContents.openDevTools()
    win.on('closed', () => {
      win = null
    })
    win.loadFile('index.html')
  }
  
  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })