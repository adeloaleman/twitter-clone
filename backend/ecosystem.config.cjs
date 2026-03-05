module.exports = {
  apps: [
    {
      name: "twitter-clone-backend",
      script: "./build/index.js",
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
