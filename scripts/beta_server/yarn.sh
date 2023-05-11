#!/bin/bash

ssh -t -t -p 9527 www@47.241.145.0 << remotessh

sh /data/www/double/new-double-dapp/scripts/yarn.sh  
exit
remotessh