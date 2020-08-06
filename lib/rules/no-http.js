
module.exports = {
  create: function(context) {
    return {
      Literal(node) {
        const reg = /http:\/\/[^\s]*?\.(jpg|png|gif|jpeg|webp)/;
        if (reg.test(node.value)) {
          context.report({
            node,
            message: `请检查图片地址是否使用https协议`
          })
        }
      }
    };
  }
};
