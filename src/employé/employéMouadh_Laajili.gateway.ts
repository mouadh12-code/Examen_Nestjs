import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EmployeGateway {
  @WebSocketServer()
  server: Server;

  sendSalaryAlert(employe: any) {
    this.server.emit('salaryAlert', {
      message: ` Salaire élevé : ${employe.FullName} dépasse 4000 DT`,
      employe,
    });
  }
}
