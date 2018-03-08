#!/usr/bin/env bash
echo "Searching 'lolteam-*' images on the docker host..."
images=`docker images -f "reference=lolteam-*" -q`
if [ -z $images ]
then
  echo "No 'lolteam-*' images found."
else
  echo "Deleting found images..."
  docker rmi -f $images
fi