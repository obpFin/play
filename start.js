if (process.argv[2] === 'dev') {

  process.env.NODE_ENV = 'development';
  require('./src/server');

} else if (process.argv[2] === 'prod') {

  process.env.NODE_ENV = 'production';

} else if (process.argv[2] === 'test') {

  process.env.NODE_ENV = 'test';
}