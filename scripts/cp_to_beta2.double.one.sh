#!/bin/bash

error_exit() {
    if [ ${?} -ne 0 ];
    then
       echo $1
       exit 1
    fi
}

src_dir="/data/www/double/new-double-dapp/dist"
dist_dir="/data/www/double/beta2.double.one/" 

rm -rf $dist_dir/*
error_exit "rf -f $dist_dir/* failed."

cp -r  $src_dir/* $dist_dir
error_exit "cp  failed."

echo " ======= success ========"
echo " ======= success ========"
