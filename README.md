## move-dist-plugin插件使用说明

```js
  const path = require('path');//引入nodejs的path模块
  const MoveDistPlugin = require('move-dist-plugin'); // 引入move-dist-plugin插件

  // 相对路径转为绝对路径的方法
  function resolve(dir) {
    return path.join(__dirname, dir);
  }

  ...
  // 使用插件，放到webpack plugin配置的数组里面
  new MoveDistPlugin({
    target_path: resolve('target'), // 需要移动到的文件夹路径
    source_path: resolve('dist')  // 源文件路径
  })

```