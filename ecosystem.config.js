module.exports = {
  apps: [
    {
      watch: '.',
      cwd: '/home/nurul/htdocs/nurul.dev',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      script: './service-worker/',
      watch: ['./service-worker']
    }
  ],

  deploy: {
    production: {
      user: 'nurul',
      host: '62.72.24.228',
      ref: 'origin/main',
      repo: 'git@github.com:nurul-islam01/next.git',
      path: '/home/nurul/htdocs/nurul.dev',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes'
    }
  }
};
