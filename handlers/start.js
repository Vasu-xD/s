const Markup = require('telegraf/markup')
const { userName } = require('../utils')



  await ctx.replyWithHTML(ctx.i18n.t('cmd.start.info', {
    name: userName(ctx.from)
  }), Markup.removeKeyboard().extra({ disable_web_page_preview: true }))

  if (ctx.config.catalogUrl) {
    if (ctx.startPayload === 'catalog') {
      await ctx.replyWithHTML(ctx.i18n.t('cmd.start.catalog'), {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [
              {
                text: ctx.i18n.t('cmd.start.btn.catalog'),
                web_app: {
                // login_url: {
                  url: ctx.config.catalogUrl,
                  request_write_access: true
                }
              }
            ]
          ]
        })
      })
    } else {
      await ctx.replyWithHTML('👇', {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [
              {
                text: ctx.i18n.t('cmd.start.btn.catalog_mini'),
                web_app: {
                // login_url: {
                  url: ctx.config.catalogUrl,
                  request_write_access: true
                }
              }
            ]
          ]
        })
      })
    }
  }
}
