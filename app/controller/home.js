'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, config } = this;
        ctx.body = this.app.config;
    }
}

module.exports = HomeController;