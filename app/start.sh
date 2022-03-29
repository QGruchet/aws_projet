#!bin/sh

if [ "$NODE_ENV" = 'production']; then
	node $1
else
	nodemon $1
fi
