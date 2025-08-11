module.exports = {
  apps: [
    {
      name: "one-buck",
      script: "npm",
      args: "start",
      cwd: "/var/www/one-buck",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
