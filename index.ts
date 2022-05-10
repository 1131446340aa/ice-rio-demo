import path from 'path';
import { ErrorMiddleware, HttpServer } from 'ice-rio';

async function run() {
  let isDev = true;
  //@ts-ignore
  const env: 'dev' | 'prod' | 'build' =
    process.argv[2] || (isDev ? 'dev' : 'prod');
  let h = new HttpServer({
    hooks: {
      beforeCreated: [ErrorMiddleware()]
    }
  });
  await h.load({
    rootDir: path.join(__dirname),
    appDir: './app',
    initDb: false,
    enableApiDoc: true,
    enableViews: true,
    apiDocDir: env === 'prod' ? './public' : '',
    env: env,
    dbConfig: {
      port: 3306,
      host: 'xx.xxx.xx.xx',
      database: 'xxx',
      username: 'xxx',
      password: 'xxxx',
      dialect: 'mysql'
    }
  });
  h.listen(3000, () => {
    console.log(`the server is running http://localhost:3000/`);
  });
}

run();
