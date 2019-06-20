// 获取 Token
exports.getAccessToken = ctx => {
  let bearerToken = ctx.request.header.authorization;
  return bearerToken && bearerToken.replace("Bearer ", "");
};

// 校验 Token
exports.verifyToken = async (ctx) => {
  let token = this.getAccessToken(ctx);
  let verifyResult = await ctx.service.tools.verifyToken(token);
  if (!verifyResult.verify) {
    ctx.helper.error(ctx, 401, verifyResult.message);
    return false;
  }
  return true;
};

// 处理成功响应
exports.success = (ctx, result = null, code = 200) => {
  ctx.body = {
    data: result
  };
  ctx.status = code;
};

// 处理失败响应
exports.error = (ctx, code, message) => {
  ctx.body = {
    message: message,
    status_code: code
  };
  ctx.status = code;
};

// 无状态响应
exports.noContent = (ctx) => {
  ctx.status = 204;
};

// 成功创建资源了的响应
exports.created = (ctx, result = null, code = 201) => {
  ctx.body = {
    data: result
  };
  ctx.status = code;
};