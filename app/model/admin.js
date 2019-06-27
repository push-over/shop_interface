module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const AdminSchema = new Schema({
    account: { type: String },                          // 用户名
    password: { type: String },                         // 密码
    avatar: { type: String, default: '' },                // 头像
    created_at: { type: Number, default: d.getTime() }, // 创建时间
    updated_at: { type: Number, default: d.getTime() }, // 修改时间
  });

  return mongoose.model("Admin", AdminSchema);
};