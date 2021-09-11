#!/bin/bash

echo "=========== 프론트엔드 배포 시작 =========="
echo "> /home/ec2-user/mbti_zip_front 로 이동"
cd /home/ec2-user/mbti_zip_front
echo "> 빌드"
yarn install
yarn build