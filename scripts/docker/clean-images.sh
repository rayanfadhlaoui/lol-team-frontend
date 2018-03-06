#!/usr/bin/env bash
echo "Searching unused images on the docker host..."
images=`docker images -f "dangling=true" -q`
if [[ -z $images ]]
then
  echo "No unused images found."
else
  echo "Deleting found images..."
  docker rmi -f $image
fi
