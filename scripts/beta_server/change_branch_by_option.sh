#!/bin/bash
branch=$1
if [ ! -n "$1" ] ;then
    echo "branch can not be null"
else
    echo "branch=$1"
fi
ssh -t -t -p 9527 www@47.241.145.0  << remotessh

cd /data/www/double/new-double-dapp/ && git checkout ${branch}

exit
remotessh