#!/bin/bash

ssh -t -t -p 9527 www@47.241.111.137 << remotessh

sh /data/www/double/new-double-dapp/scripts/yarn.sh  
exit
remotessh