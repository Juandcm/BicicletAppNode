// import moment from 'moment'
// import path from "path"
// import fs from "fs"
// import helper from "./helper"

class Socket {

    constructor(socket) {
        this.io = socket;
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            socket.on("action", action => {
                switch (action.type) {
                    //Chat del foro en la web
                    case 'chat message':
                    console.log("chat message", action.data);
                    this.io.emit("chat message", action.data);
                    break;

                    case 'chat_message_text':
                    console.log("chat_message_text", action.data);
                    console.log(socket.request.connection.remoteAddress)
                    this.io.emit("chat_message_text", action.data);
                    break;
                    
                    case 'chat_message_file':
                    console.log("chat_message_file", action.data);
                    this.io.emit("chat_message_file", action.data);
                    break;

                    //foro
                    case 'actualizar_foro':
                    console.log("actualizar_foro", action);
                    this.io.emit("actualizar_foro", action.data);
                    break;

                    case 'agregar_foro':
                    console.log("agregar_foro", action);
                    this.io.emit("agregar_foro", action.data);
                    break;

                    case 'eliminar_foro':
                    console.log("eliminar_foro", action);
                    this.io.emit("eliminar_foro", action.data);
                    break;

                    case 'editar_foro':
                    console.log("editar_foro", action);
                    this.io.emit("editar_foro", action.data);
                    break;

                    //categorias
                    case 'actualizar_categorias':
                    console.log("actualizar_categorias", action);
                    this.io.emit("actualizar_categorias", action);
                    break;

                    //Piezas
                    case 'actualizar_piezas':
                    console.log("actualizar_piezas", action);
                    this.io.emit("actualizar_piezas", action);
                    break;

                    case 'eliminar_pieza':
                    console.log("eliminar_pieza", action);
                    this.io.emit("eliminar_pieza", action);
                    break;

                    case 'agregar_pieza':
                    console.log("agregar_pieza", action);
                    this.io.emit("agregar_pieza", action);
                    break;

                    case 'editar_pieza_unica':
                    console.log("editar_pieza_unica", action);
                    this.io.emit("editar_pieza_unica", action);
                    break;


                    case 'desconectar_conexion':
                    socket.disconnect(true)
                    break;

                    default:
                    break;
                }
            });

            // /**
            // * get the user's Chat list
            // */
            // socket.on('chatList', async (userId) => {
            //     const result = await helper.getChatList(userId);
            //     this.io.to(socket.id).emit('chatListRes', {
            //         userConnected: false,
            //         chatList: result.chatlist
            //     });

            //     socket.broadcast.emit('chatListRes', {
            //         userConnected: true,
            //         userId: userId,
            //         socket_id: socket.id
            //     });
            // });
            // /**
            // * send the messages to the user
            // */
            // socket.on('typing', function (data) {
            //     console.log('typing', data)
            //     socket.to(data.socket_id).emit('typing', { typing: data.typing, to_socket_id: socket.id });
            // });
        });
    }

    socketConfig() {
        this.io.use(async (socket, next) => {
            // let userId = socket.request._query['id'];
            // let userSocketId = socket.id;
            // const response = await helper.addSocketId(userId, userSocketId);
            // console.log(socket) 
            // console.log(userId)
            // console.log(userSocketId)
            
            // console.log(response)
            // console.log(datos)
            // if (response && response !== null) {
                next();
            // } else {
            //     console.error(`Socket connection failed, for  user Id ${userId}.`);
            // }
        });
        this.socketEvents();
    }
}
export default Socket;
