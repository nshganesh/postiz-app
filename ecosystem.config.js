module.exports = {
    apps: [
      {
        name: 'backend',
        script: 'npm',
        args: 'run start:prod',
        cwd: './', // Adjust this path if needed
      },
      {
        name: 'frontend',
        script: 'npm',
        args: 'run start:prod:frontend',
        cwd: './', // Adjust this path if needed
      },
      {
        name: 'workers',
        script: 'npm',
        args: 'run start:prod:workers',
        cwd: './', // Adjust this path if needed
      },
      {
        name: 'cron',
        script: 'npm',
        args: 'run start:prod:cron',
        cwd: './', // Adjust this path if needed
      },
    ],
  };