import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class MyGateway {

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() data: string): string {
        console.log(data);
      return data;
    }
}