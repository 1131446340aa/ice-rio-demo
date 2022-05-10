import { DataTypes } from 'ice-rio';

export default {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true,
    comment: '用户名'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '密码'
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '昵称'
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 3,
    comment: '性别(1 男性, 2 女性, 3保密)'
  }
};
