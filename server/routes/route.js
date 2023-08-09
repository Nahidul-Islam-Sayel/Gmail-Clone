import express from 'express';
import { deleteEmails, getEmails, moveEmailsToBin, saveSendEmails, toggleStarredEmail, } from '../controller/email-controller.js';
const routers = express.Router();

routers.post('/save',saveSendEmails);
routers.get('/emails/:type', getEmails);
routers.post('/save-draft',saveSendEmails)
routers.post('/bin', moveEmailsToBin);
routers.post('/starred', toggleStarredEmail);
routers.delete('/delete', deleteEmails)
export default routers;