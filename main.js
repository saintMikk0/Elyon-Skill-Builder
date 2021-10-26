const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
// Menu.setApplicationMenu(false)

function createWindow () {
  const win = new BrowserWindow({
    width: 1550,
    height: 840,
    autoHideMenuBar: "false",
    title: "Hang on, let me grab that page....",
    icon: __dirname + '/elyon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // Will Disable this for now!

//   ipcMain.handle('dark-mode:toggle', () => {
//     if (nativeTheme.shouldUseDarkColors) {
//       nativeTheme.themeSource = 'light'
//     } else {
//       nativeTheme.themeSource = 'dark'
//     }
//     return nativeTheme.shouldUseDarkColors
//   })

//   ipcMain.handle('dark-mode:system', () => {
//     nativeTheme.themeSource = 'system'
//   })

  
  win.loadURL('https://bit.ly/enskillbuilder')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})