#!/usr/bin/env bash

function countContainers() {
  docker ps -aq | wc -l
}

function getContainerIDAtIndex() {
  index=${1-0} # Default index is 0

  containers=(`docker ps -aq`)
  return ${containers[$index]}
}


function stopAllContainers() {
  ##### Variables declaration
  containersLength=$(countContainers)
  currentIndex=1
  ##### Instructions
  for ID in `docker ps -aq`
  do
    printf "[$currentIndex/$containersLength] "
    docker stop $ID
    ((currentIndex++))
  done
}
