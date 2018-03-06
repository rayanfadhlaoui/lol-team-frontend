#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" # Resolve current execution path

## Import utilities
source $DIR/utils/main.sh

echo "Stopping others containers..."
stopAllContainers

echo "Deleting front's container if exists..."
docker rm -f lolteam-front

echo "Starting front's containers..."
docker run -itd --name=lolteam-front -p=80:80/tcp -e LOLTEAM_FRONT_PORT=80 -e DEBUG=true lolteam/front:$npm_package_version bash -c "yarn build && yarn start"
