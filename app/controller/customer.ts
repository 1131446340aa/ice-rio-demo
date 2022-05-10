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
import { ICustomerDetail, ISuccessRet, CustomerModel } from '../../interface';
const successRet = <T = unknown>(ret: T, message = '') => ({
  code: 200,
  message,
  ret
});
@controller('/customer')
export default class Customer {
  //入参 model 层的文件名即可
  @InjectDB('User')
  private user: ModelCtor<Model<CustomerModel>>;

  /**
   * @description: 验证 Body装饰器、body 类型更复杂，且是通过引用接入的
   * @param {*}
   * @return {*}
   */
  @validated
  @post()
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
  ): Promise<ISuccessRet<CustomerModel>> {
    const ret = await this.user.findOne({ where: { userName } });
    return successRet(ret?.toJSON()!);
  }
}
