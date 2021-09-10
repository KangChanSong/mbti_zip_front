// Dockerfile
FROM node:10.14
MAINTAINER KangChanSong<thdrkdcks@naver.com>
VOLUME /deploy/mbti_zip_front

COPY ./start-server.sh /usr/local/bin
RUN ln -s /usr/local/bin/start-server.sh /start-server.sh
CMD ["start-server.sh"]