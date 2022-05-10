import {
  controller,
  get,
  Query,
  Params,
  ErrorMiddleware,
  required,
  validated,
  All
} from 'ice-rio';
import { IValidatedJson } from '../interface';

const validatorJSONStr = (str: string) => {
  try {
    let ret = JSON.parse(str);
    if (typeof ret === 'object') {
      return '';
    }
    return 'please input json str';
  } catch (err) {
    return 'please input json str';
  }
};
@controller('/user')
export default class GetTest {
  // demo http://localhost:3000/user/detail/1
  /**
   * @description: 验证 Params装饰器、required 校验普通类型、中间件功能
   * @param {*}
   * @return {*}
   */
  @validated
  @get('/detail/:userName', { middleWare: [ErrorMiddleware()] })
  async getDetail(
    @required() @Params() userName: number
  ): Promise<{ message: string }> {
    // 一定会失败，因为 userName 一定是 string 类型,而 ts 的 type 写的是 number 类型
    return { message: `this is a test api,the str is ${userName}` };
  }

  // demo http://localhost:3000/user/info/?description=happy&age=21
  /**
   * @description: 验证 Query 装饰器、required 校验普通类型和复杂数据类型、参数装饰器入参 All 的情况
   * @param {*}
   * @return {*}
   */
  @validated
  @get('/info', { middleWare: [ErrorMiddleware()] })
  async info(
    @required() @Query(All) attrs: { description: string; age: string }
  ): Promise<{ message: string }> {
    const { description, age } = attrs;
    return {
      message: `this is a test api,the str is ${description},the age is ${age}`
    };
  }

  // demo http://localhost:3000/user/json/?jsonStr=789&age=30
  // error message Failed for parameter: The parameter attrs.jsonStr is a custom check,the error message is as follows:please input json str,please verify the parameters
  /**
   * @description: 验证 required 入参函数(入参默认会在编译阶段将 IValidatedJson 转化为 { age: 'string', jsonStr: 'string' }), required 如果自定义入参必须加上泛型
   * @param {*}
   * @return {*}
   */
  @validated
  @get('/json', { middleWare: [ErrorMiddleware()] })
  async getJson(
    @required<IValidatedJson>({ age: 'string', jsonStr: validatorJSONStr })
    @Query(All)
    attrs: IValidatedJson
  ): Promise<{ message: string }> {
    return { message: `this is a test api,the str is ${attrs.jsonStr}` };
  }
}
