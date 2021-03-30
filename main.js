const { app, BrowserWindow } = require('electron')
const path = require('path')
const { ipcMain } = require('electron')

let ventana

function ventanaPrincipal() {
    const ventana = new BrowserWindow({

        width: 350,
        height: 245,

        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload.js')
        }

    })

    ventana.loadFile('./formulario.html')

}

app.whenReady().then(ventanaPrincipal)

ipcMain.on('enviarMain', function(event, args) {
    console.log(args)
    ventana.webContents.send('respuestaRenderer', 'Mensaje Recibido')
})