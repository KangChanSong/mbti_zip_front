#!/bin/bash

cd /deploy/mbti_zip_front
yarn install
yarn build && yarn start

chmod +x ./start-server.sh

docker build -t mbti_zip_front-image .

docker images