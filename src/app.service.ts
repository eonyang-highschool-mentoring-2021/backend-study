import { Injectable } from '@nestjs/common';
import { NameInf } from './dto.interface';

@Injectable()
export class AppService {
  private readonly data: NameInf[] = [
    { name: '동수', class: 'python' },
    { name: '산해', class: 'c++' },
    { name: '종현', class: 'typscript' },
    { name: '혜림', class: 'java' },
    { name: '유정', class: 'swift' },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  /**
   * @name 명단_목록_조회
   */
  getNameList(): NameInf[] {
    return this.data;
  }

  /**
   * @name 개별_명단_생성
   */
  addNewNameToList(): any {
    return;
  }

  /**
   * @name 개별_명단_수정
   */
  updateClassToList(): any {
    return;
  }

  /**
   * @name 개별_명단_삭제
   */
  deleteClassToList(): any {
    return;
  }
}
