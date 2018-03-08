#!/usr/bin/env bash
echo "Starting to build docker image (v$npm_package_version)..."
docker build -t "$1:$npm_package_version" .
