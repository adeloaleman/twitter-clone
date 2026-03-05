# Deploy frontend (Ubuntu server)

Backend must be running (e.g. with PM2 on port 8080).

## 1. Build the frontend on the server

Use Node 14 or 16 (same as backend is fine).

```bash
cd /var/www/sinfronteras/twitter-clone/frontend
nvm use 16   # or 14
npm install
npm run build
```

Output is in `frontend/build/`.

## 2. Install Nginx (if not already)

```bash
sudo apt update
sudo apt install -y nginx
```

## 3. Configure Nginx

Edit the config and set your domain or IP:

```bash
# Copy and edit
sudo cp /var/www/sinfronteras/twitter-clone/deploy/nginx-twitter-clone.conf /etc/nginx/sites-available/twitter-clone
sudo sed -i 's/YOUR_DOMAIN_OR_IP/sinfrontera.net/' /etc/nginx/sites-available/twitter-clone
# Or use your server IP instead of sinfrontera.net
```

Enable the site:

```bash
sudo ln -sf /etc/nginx/sites-available/twitter-clone /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 4. Open HTTP (and optional HTTPS)

- Port 80: `sudo ufw allow 80` then `sudo ufw reload` if using UFW.
- For HTTPS: install certbot and run `sudo certbot --nginx -d sinfrontera.net`.

## 5. Check

- Frontend: `http://YOUR_DOMAIN_OR_IP/`
- API: `http://YOUR_DOMAIN_OR_IP/api/v1/tweets` (should return JSON).

If the API returns 502, ensure the backend is running: `pm2 status twitter-clone-backend`.
