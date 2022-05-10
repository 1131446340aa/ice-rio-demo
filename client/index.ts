import axios from 'axios';

// demo1 测试接口 1
axios
  .post('http://localhost:3000/customer/getCustomerDetail', {
    age: 25,
    shape: {
      height: 180,
      // 将 weight 改为 string 类型会报错: Failed for parameter: the type of Parameter body.shape.weight is number,but the type of input is string, please verify the parameters
      weight: 120

      // money 可选，但是输入的必须是数字,否则会报错
      // money: 19
    },
    car: { price: '0' },
    price: 21,
    helpers: ['21'],
    des: 'happy'
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err.response.data);
  });

// demo2 测试接口 2
// axios.post('http://localhost:3000/customer/updateCustomerDetail', {
//   userName: 'xiaohuang'
// }).then(res => {
//   console.log(res.data);

// }).catch(err => {
//   console.log(err.response.data);

// })
