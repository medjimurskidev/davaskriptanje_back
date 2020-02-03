#!/bin/bash
# This script is used to deploy backend service to deployment server. 
# Varibales and commands are pretty much self explanatory, but don't hesitate to 
# ask your local system administrator for more info. ;)

USER="root"
SERVER_ADDRESS="95.217.8.24"
PATH_TO_DEPLOYMENT_FOLDER="/var/www/gametracker-back/backend"

rsync -avz --stats --progress --exclude-from='exclude-file.txt' . $USER@$SERVER_ADDRESS:$PATH_TO_DEPLOYMENT_FOLDER
sleep 0.1
ssh root@$SERVER_ADDRESS << EOF
        sleep 0.1
        pm2 kill
        sleep 0.5
        cd /var/www/gametracer-back/backend 
        npm i 
        pm2 start src/index.js
EOF
