import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* 본체, 1000개의 요청을 병렬처리 하는 서버를 키는 코드 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000); // local 환경, 동진 님의 컴퓨터, network 5000 port 번호로 오는 요청들을 받는다.
}
bootstrap();
