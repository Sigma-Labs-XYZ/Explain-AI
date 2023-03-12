#!/bin/bash
echo "💣 Resetting DB..."
containers=$(docker ps -qa -f="name=explainai")
if [ ! -z "$containers" ]
then
    echo "Stopping containers..."
    docker stop $containers
    echo "Removing containers..."
    docker rm $containers
else
    echo "No containers found"
fi
repos=("explainai-postgres" "explainai-hasura" "hasura/graphql-engine" "explainai-nextjs")
for i in "${repos[@]}"
do
    images=$(docker images -qa $i)
    if [ ! -z "$images" ]
    then
        echo "Removing images..."
        docker rmi -f $images
    fi
done
volumes=$(docker volume ls -q)
if [ ! -z "$volumes" ]
then
    echo "Removing volumes..."
    docker volume rm $volumes
else
    echo "No volumes found"
fi
networks=$(docker network ls -q)
echo "✅ Reset complete"