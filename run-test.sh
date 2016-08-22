#########################################################################
# File Name: run-test.sh
# Author: Afar
# mail: 550047450@qq.com
# Created Time: Sat 20 Aug 2016 12:17:10 AM CST
#########################################################################
#!/bin/bash

echo $'\n\n run test of firefly'
npm run refreshMongo # refreshMongo before run test, otherwise first test will faild 

times=30

while [ $times -gt 0 ]; do
	npm test  # run test
	echo "----------------------- # $times "
	times=$((times-1))
done
echo 'All test finished'

