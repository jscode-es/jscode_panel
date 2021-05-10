import path from 'path'
import dotenv from 'dotenv'
import { app } from 'electron'
import application from './class/application'

app.allowRendererProcessReuse = true

dotenv.config()

new application()