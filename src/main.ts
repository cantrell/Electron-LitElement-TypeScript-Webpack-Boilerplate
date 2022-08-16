import {app, BrowserWindow} from 'electron';

async function onReady() {
    console.log('onReady...');
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }});
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
    const fileName = `file://${__dirname}/index.html`;
    mainWindow.loadURL(fileName);
    mainWindow.on('close', () => app.quit());
}

app.on('ready', () => onReady());
app.on('window-all-closed', () => app.quit());