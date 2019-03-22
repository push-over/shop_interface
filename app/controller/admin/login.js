'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async authentication() {
    const { ctx, service } = this;
    // 获取用户提交的信息
    const admin = {
      account: ctx.request.body.account,
      password: await service.tools.md5(ctx.request.body.password)
    }

    // 数据库查询
    let result = await ctx.model.Admin.find(admin);
    console.log(result);
    // 如果有则生成token返回状态码
    if (result[0]) {
      var token = await service.tools.createToken({
        "_id": result[0]._id,
        "account": result[0].account,
        "password": result[0].password
      });
      // 返回token与状态码
      ctx.body = {
        access_token: token,
      };
      ctx.status = 201;
    } else {
      // 否则返回错误信息
      ctx.helper.error(ctx, 401, "用户名或密码错误");
    }
  }

  // 测试
  async gettoken() {
    const { ctx } = this;
    ctx.body = "sdfs";
  }
}

module.exports = LoginController;
