#!/bin/bash

echo "============== 프론트엔드 배포 시작 =============="

ZIP_REPOSITORY=/home/ec2-user/zips/front

REPOSITORY=/home/ec2-user/app/front
PROJECT_NAME=mbti_zip_front

echo "> Build 파일 복사"

cp $ZIP_REPOSITORY/zip/* $REPOSITORY/

echo "> 현재 구동중인 애플리케이션 pid 확인"

CURRENT_PID=$(pgrep -fl mbti_zip_front | grep node | awk '{print $1}')

echo "> 현재 구동중인 애플리케이션 pid: $CURRENT_PID"

if [ -z "$CURRENT_PID"]; then
  echo "> 현재 구동중인 애플리케이션이 없으므로 종료하지 않습니다."
else
  echo "> kill -15 $CURRENT_PID"
  kill -15 $CURRENT_PID
  sleep 5
fi

echo "> 새 애플리케이션 배포"

cd $ZIP_REPOSITORY/

nohup npm start &