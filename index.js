const shell = require('shelljs');

class MoveDistPlugin {
  // 传入的路径
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.done.tap('MoveDistPlugin',
     (compilation, callback) => {
        console.log('传入的源路径为', this.options.source_path);
        console.log('传入的目标路径为', this.options.target_path);
        shell.rm('-rf', this.options.target_path + '/*');
        shell.cp('-R', this.options.source_path + '/*', this.options.target_path);
        shell.echo('已将dist文件移动到目标路径！');
    });
  }
}
module.exports = MoveDistPlugin;