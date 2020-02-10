import express from "express"
import http from 'http'
import socketio from 'socket.io'
import socketEvents from './utils/socket'

class Server {
	constructor() {
		this.port = process.env.PORT || 3000;
        this.host = process.env.HOST || `localhost`;

        this.app = express();
        this.http = http.Server(this.app);
        this.socket = socketio(this.http);
	}
 
	appRun(){
		new socketEvents(this.socket).socketConfig();
		this.app.use(express.static(__dirname + '/uploads'));
        this.http.listen(process.env.PORT || 3000,()=> {
            console.log(`Escuchando en el servidor: http://${process.env.HOST }:${process.env.PORT}`);
            console.log(`Escuchando en el servidor: http://${this.host }:${this.port}`);
        });
    }
}
const app = new Server();
app.appRun();
