#!/bin/bash

sh /data/www/double/new-double-dapp/scripts/build_dapp.sh test 
if [ ${?} -ne 0 ]; then
    echo "build failed."
    exit 1
fi

sh /data/www/double/new-double-dapp/scripts/cp_to_test3.double.one.sh 
