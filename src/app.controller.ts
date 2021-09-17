import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { NameInf } from './dto.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/names')
  getNameList(): NameInf[] {
    return this.appService.getNameList();
  }

  @Post('/new-one')
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
