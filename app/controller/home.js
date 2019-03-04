'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, config } = this;

        ctx.body = await ctx.render('home/index.njk', {data:123});
    }
}

module.exports = HomeController;