import { Injectable } from '@nestjs/common';
import { NameInf } from './dto.interface';

/**
 *  @name Service란_Database와_상호작용하는곳.
 * 상호작용?
 * 1. 조회 - @GET
 * 2. 생성 - @POST
 * 3. 수정 - @UPDATE, @PUT
 * 4. 삭제 - @DELETE
 */
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
   * 이 Service Method 는 GET Router 에서 요청을 받아서
   * Database 의 조회를 수행한다.
   */
  getNameList(): NameInf[] {
    /* 실질적으로 소비자의 요청을 계산하거나 Database 조회 해오거나 하는 등의 작업을 수행한다. */
    return this.data;
  }

  /**
   * @name 개별_명단_생성
   * 이 Service Method 는 POST Router 에서 요청을 받아서
   * Database 의 생성을 수행한다.
   */
  addNewNameToList(): any {
    // 비어있는곳
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
