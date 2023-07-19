//모듈
const express = require('express');
const app = express();

//라우팅
import router from './routes';

// 앱셋팅
app.set('views', process.cwd() + '/src/views');
app.set('view engine', 'ejs');

app.use('/', router);


export default  app;