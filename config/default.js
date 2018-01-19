module.exports = {
  port: 3000,
  session: {
    secret: 'node_blog',
    key: 'node_blog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/node_blog'
}