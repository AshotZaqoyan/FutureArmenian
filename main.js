const { app, BrowserWindow, Menu } = require('electron');
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


const template = [
	{
		label: 'File',
		submenu: [
			{
				role: 'quit'
			}
		]
	},
	{
		label: 'Edit',
		submenu: [
			{ role: 'cut' },
			{ role: 'copy' },
			{ role: 'paste' },
			{ type: 'separator' },
			{ role: 'selectAll' }
		]
	},

	{
		label: 'View',
		submenu: [
			{ role: 'reload' },
			{ role: 'forceReload' },
			{ role: 'toggleDevTools' },
			{ type: 'separator' },
			{ role: 'resetZoom' },
			{ role: 'zoomIn' },
			{ role: 'zoomOut' },
			{ type: 'separator' },
			{ role: 'togglefullscreen' }
		]
	},
	{
		role: 'window',
		submenu: [
			{ role: 'minimize' },
			{ role: 'zoom' },
			{ role: 'close' }
		]
	},
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);



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


