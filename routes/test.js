var a= { method: 'POST',
     url: '/users/bar',
     header: 
      { host: '127.0.0.1:3000',
        connection: 'keep-alive',
        'content-length': '5',
        accept: '*/*',
        origin: 'http://127.0.0.1:3000',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        referer: 'http://127.0.0.1:3000/html/test.html',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9' } },
  response: { status: 404, message: 'Not Found', header: {} },
  app: { subdomainOffset: 2, proxy: false, env: 'development' },
  originalUrl: '/users/ba r',
  req: '<original node req>',
  res: '<original node res>',
  socket: '<original node socket>' }
[2018-04-18 23:17:27.899] [DEBUG] log_file - next { request: 
   { method: 'POST',
     url: '/users/bar',
     header: 
      { host: '127.0.0.1:3000',
        connection: 'keep-alive',
        'content-length': '5',
        accept: '*/*',
        origin: 'http://127.0.0.1:3000',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        referer: 'http://127.0.0.1:3000/html/test.html',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9' } },
  response: { status: 404, message: 'Not Found', header: {} },
  app: { subdomainOffset: 2, proxy: false, env: 'development' },
  originalUrl: '/users/bar',
  req: '<original node req>',
  res: '<original node res>',
  socket: '<original node socket>' }