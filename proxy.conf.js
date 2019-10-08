const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://127.0.0.1:8080/graphql',
    secure: false
  }
];

module.exports = PROXY_CONFIG;
