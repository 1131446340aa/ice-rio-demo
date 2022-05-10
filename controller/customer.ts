import {
  controller,
  post,
  Body,
  ErrorMiddleware,
  ModelCtor,
  Model,
  InjectDB,
  required,
  validated,
  All
} from 'ice-rio';

import User from '../model/User';
import { ICustomerDetail, ISuccessRet } from '../interface';
const successRet = <T = unknown>(ret: T, message = '') => ({
  code: 200,
  message,
  ret
});
@controller('/customer')
export default class PosTTest {
  //入参 model 层的文件名即可
  @InjectDB('User')
  private user: ModelCtor<Model<typeof User>>;
  
  /**
   * @description: 验证 Body装饰器、body 类型更复杂，且是通过引用接入的
   * @param {*}
   * @return {*}
   */  
  @validated
  @post('/detail', { middleWare: [ErrorMiddleware()] })
  async getCustomerDetail(
    @required() @Body(All) body: ICustomerDetail<string, number>
  ): Promise<ISuccessRet<ICustomerDetail<string, number>>> {

    return successRet(body);
  }

  /**
   * @description:  验证 db 功能
   * @param {*}
   * @return  {*}
   */
  @validated
  @post('/updateCustomerDetail', { middleWare: [ErrorMiddleware()] })
  async updateCustomerDetail(
    @required() @Body() userName: string
  ): Promise<{ a: string }> {
    const ret = await this.user.findOne({ where: { userName } });
    //@ts-ignore
    return ret;
  }
}
