module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const PrivilegeSchema = new Schema({
    parent_id: {type: Schema.Types.Mixed}, // 上级ID
    name: {type: String}, // 权限名称
    path: {type: String},  // 权限路径
    method: {type: String}  // GET POST PUT DELETE
  });

  return mongoose.model("Privilege", PrivilegeSchema);
};