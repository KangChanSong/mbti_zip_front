#!/bin/bash

echo "=========== START NGINX ============"
if [ -e /var/run/nginx.pid ]; then sudo systemctl stop nginx; fi

sudo systemctl start nginx