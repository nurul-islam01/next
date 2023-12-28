module.exports = {
  apps: [
    {
      script: 'npm start'
    }
  ],
  deploy: {
    production: {
      user: 'nurul',
      host: '62.72.24.228',
      ref: 'origin/main',
      repo: 'git@github.com:nurul-islam01/next.git',
      path: '/home/nurul/htdocs/nurulislam.dev',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm i && npm run build && pm2 reload ecosystem.config.js -env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes'
    }
  }
};
