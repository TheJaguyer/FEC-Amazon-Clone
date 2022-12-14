module.exports = {
  dev: {
    port: 8000,
    connectionString: 'postgresql://postgres:docker@127.0.0.1:5432/Amazon',
  },
  production: {
    port: process.env.PORT,
    connectionString: process.env.CONNECT + '?ssl=true',
  },
};
