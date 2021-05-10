let $ = process.env

import path from 'path'
import { app, BrowserWindow, Tray } from 'electron'

export default class application
{
    static icon:any = null

    constructor()
    {
        let that  = this

        // Check is initialize
        let isInit:any = app.requestSingleInstanceLock();
        
        (!isInit) ? app.quit() : app.on('ready',that.launch )

        app.on('ready',that.launch )
    }

    launch()
    {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            frame:true,
            webPreferences:
            {
                devTools:true
            }
        })

        win.loadFile(path.resolve(__dirname+'/../../public/index.html'))

        application.icon = new Tray(String($.ICON))
        application.icon.setTitle('JSCode')

    }
}