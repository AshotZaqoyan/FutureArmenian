const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 1300,
		height: 900,
		title: "Future Armenian",
		icon: path.join(__dirname, 'src/img/FutureArmenian.ico'),
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false,
		}
	});
	mainWindow.loadFile(path.join(__dirname, 'src/index.html'));
	mainWindow.webContents.openDevTools();
};
app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
