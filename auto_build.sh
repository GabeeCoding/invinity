#!/bin/bash

set -x

#bun_pid=

dev(){
	bun build.ts
	bun serve.ts &
	bun_pid=$!
}

stop=false
cleanup(){
	stop=true
	exit
}
trap cleanup INT TERM

dev

while [ $stop == false ]; do
	inotifywait -r -e modify . &>/dev/null
	if [ ! -z $bun_pid ]; then
		kill $bun_pid
		unset bun_pid
		dev
	fi
done
