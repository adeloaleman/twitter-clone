module.exports = {
  apps: [
    {
      name: "twitter-clone-backend",
      script: "./build/index.js",
      interpreter: "/home/ubuntu/.nvm/versions/node/v16.20.2/bin/node",
      cwd: __dirname,
      env: {
        AUTH_SECRET: "miclaveprivada",
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
    },
  ],
};