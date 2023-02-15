const path = require('path')

module.exports = {
  apps: [
    {
      name: 'app',
      script: path.resolve(__dirname, 'src', 'server.js'),
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        HOME: 'root',
        HOMEPATH: 'root'
      }
    }
  ]
}

// const path = require('path')

// module.exports = {
//   apps: [
//     {
//       name: 'app',
//       script: path.resolve(__dirname, 'src', 'server.js'),
//       instances: 'max',
//       env: {
//         NODE_ENV: 'development'
//       },
//       env_production: {
//         NODE_ENV: 'production'
//       }
//     }
//   ]
// }
