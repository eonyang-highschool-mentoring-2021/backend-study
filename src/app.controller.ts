import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { NameInf } from './dto.interface';

/* React 는 함수, 각각의 HTML 요소 컴포넌트 함수, JSX Element 리턴 함수 */

// Nestjs 는 각 요소(Module, Controller, Service) -> Class Typescript Class
// 1. Data Field
// 2. Method

@Controller('app') // localhost:5000 + /names
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Back End, API Server 하는 일?
   * REST API 규칙 -> 왜? 하단의 4개 method 인가?
   * Database Method
   * 1. 조회 - @GET
   * 2. 생성 - @POST
   * 3. 수정 - @UPDATE, @PUT
   * 4. 삭제 - @DELETE
   */

  /**
   * 1. HTTP 요청에 대하여
   * 2. HTTP 요청에서 GET 의 의미가 뭐다
   * 3. GET 안에 몇번째 라인에 소비자의 요청이 들어있다.
   * ...
   * -> http 요청을 "이해" 하기 위한 정보를 담고있다.
   */
  @Get() // AppController 로 들어온 요청 중 localhost:5000 으로 온 Get 요청을 처리하라.
  getHello(): string {
    // AppController 라고 하는 class 의 Method!
    return this.appService.getHello();
  }

  /**
   * @name Database의_모든내용을_조회하여_반환하라
   * 1) Endpoint : http://localhost:5000/names
   * 2) Method : Get
   * @returns
   */
  @Get('/names') // AppController 로 들어온 요청 중 localhost:5000/app/names 으로 온 Get 요청을 처리하라.
  getNameList(): NameInf[] {
    return this.appService.getNameList();
  }

  @Post('/new-one') // AppController 로 들어온 요청 중 localhost:5000/new-one 으로 온 Post 요청을 처리하라.
  addNewName(): any {
    return this.appService.addNewNameToList();
  }

  @Put('/update-one')
  updateClass(): any {
    return this.appService.updateClassToList();
  }

  @Delete('/delete-one')
  deleteOne(): any {
    return this.appService.deleteClassToList();
  }
}
