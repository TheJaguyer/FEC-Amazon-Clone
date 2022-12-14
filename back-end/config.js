module.exports = {
  dev: {
    port: 8000,
    connectionString: 'postgresql://postgres:docker@127.0.0.1:5432/Amazon',
  },
  production: {
    port: process.env.PORT,
    connectionString:
      'postgres://amazon_database_user:nYGWZMX6yX9VPlfHHRIkw2ACQL7qByss@dpg-ced088sgqg459grtpok0-a.oregon-postgres.render.com/amazon_database',
  },
};
