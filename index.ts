import path from 'path';
import { HttpServer } from 'ice-rio';
async function run() {
  let h = new HttpServer({
    hooks: {
      beforeCreated: []
    }
  });
    await h.load({
    dir: path.join(__dirname),
    initDb: false,
    apiDoc: true,
    apiDocDir: './public',
    env:'dev',
    dbConfig: {
      port: 3306,
      host: 'xx.xxx.xx.xx',
      database: 'xxx',
      username: 'xxx',
      password: 'xxxx',
      dialect: 'mysql'
    }
  });
  h.listen(3000,()=>{
    console.log(`the server is running http://localhost:3000/`);
  });
}

run();
