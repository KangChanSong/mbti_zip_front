#!/bin/bash

echo "> start-server.sh"

cd /deploy/mbti_zip_front
yarn install
yarn build && yarn start

chmod +x ./start-server.sh

sudo systemctl start docker

docker build -t mbti_zip_front-image .

docker images