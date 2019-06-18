module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleCatSchema = new Schema({
    cat_name: { type: String },      // 文章分类名称
  });

  return mongoose.model("ArticleCat", ArticleCatSchema);
};