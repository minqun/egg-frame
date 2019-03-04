/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require("path");
const common = require('./comm.js');
module.exports = app => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {};
    // 用于cookie签名密钥，应该改为自己的并保持安全
    config.keys = app.name + '_123456';
    //配置模板路径
    config.view = {
        mapping: {
            '.njk': 'nunjucks',
        },
        defaultViewEngine: 'nunjucks',
        defaultExtension: '.njk',
        root: [
          path.join(app.baseDir, 'app/view'),
        ].join(',')
      };

    // 中间件
    config.middleware = [];

    // 用户配置
    config.commom = common;

    return {
        ...config,
    };
}