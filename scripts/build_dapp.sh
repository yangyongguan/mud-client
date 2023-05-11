#!/bin/bash
echo "build prama:"$1

error_exit() {
    if [ ${?} -ne 0 ];
    then
       echo $1
       exit 1
    fi
}

dir=/data/www/double/new-double-dapp 
cd $dir
error_exit "cd $dir failed."

git branch

git pull
error_exit "git pull failed."

yarn build:$1
if [ ${?} -ne 0 ];
then
    echo "yarn build:$1 failed. start to execute: yarn"
    yarn
    error_exit "yarn failed."
    yarn build:$1
    error_exit "yarn build:$1 failed."
fi

