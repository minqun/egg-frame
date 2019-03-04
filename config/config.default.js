/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {};

    // 用于cookie签名密钥，应该改为自己的并保持安全
    config.keys = appInfo.name + '_123456';

    // 中间件
    config.middleware = [];

    // 用户配置
    const userConfig = {
        "development": {
            serve: '192.168.5.118'
        },
        "production": {
            serve: '/'
        }
    };

    return {
        ...config,
        ...userConfig,
    };
}