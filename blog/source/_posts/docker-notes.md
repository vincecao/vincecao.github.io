---
title: Docker Notes
date: 2019-09-29 00:41:47
tags:
categories: Notes
---

## microservices

Advantage:

- Easy to build divided into small pieces
- Can do module
- Module goes down, whole application dont effect

![](https://i.imgur.com/PVwvWKd.png)

![](https://i.imgur.com/8bO7AiY.png)

## Disadvantage of virtual machine:

- Resources hungers

## Docker implement

![](https://i.imgur.com/F9yw4ZT.png)

- Using docker containers on top of virtual machine, docker containers are lightweight alternative virtual machine, no need to pre-allocate the ram and disk
- Why need virtual machine
    - Docker require linux or unix, if you in PC, need virtual machine
    - No point to run all microservices in host machine, only allocate how much microservies that needed by using virtual machine.

![](https://i.imgur.com/TLnO45N.png)

- Docker container, the runtime instance of Docker Image (which identify what is require for the application)
- Docker upload to Docker Hub, a git repository for the docker images

![](https://i.imgur.com/bvf9RW7.png)

- Problems before Docker (e.g. case: indiana University)
    - Maunal script for create VM
    - Environment not optimized
    - Want Microservice Architecture
    - Need security

Solution, Docker: Docker Data Center(DDC)

## Docker Registry

- A storage component

## Docker Images

- Read only template to create containers
- Built By Docker Users
- Stored in Docker Hub

## Docker Containers

- Runtime instance of docker Image
- Contains everything that needed for the application
- Built from one or more images

*Installation and run example*

``` bash
sudo apt-get update
sudo apt-get remove docker docker-engine docker.io
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker

sudo service docker start
sudo docker pull centos
sudo docker run -it centos
```

## Docker Compose

![](https://i.imgur.com/wgtt3Qx.png)

With one command and compose multiple containers

*Installation*

``` bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

*A sample of wordpress docker-compose*

``` yml
version: '3.3'

services:
    db:
      image: mysql:5.7
      volumes:
        - db_data:/var/lib/mysql
      restart: always
      environment:
        MYSQL_ROOT_PASSWORD: somewordpress
        MYSQL_DATABASE: wordpress
        MYSQL_USER: wordpress
        MYSQL_PASSWORD: wordpress

    wordpress:
      depends_on:
        - db
      image: wordpress:latest
      ports:
        - "8000:80"
      restart: always
      environment:
        WORDPRESS_DB_HOST: db:3306
        WORDPRESS_DB_USER: wordpress
        WORDPRESS_DB_PASSWORD: wordpress
        WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```

*Basic Control*

``` bash
cd xxx
# run
sudo docker-compose up -d
# or
sudo docker-compose start

# stop
sudo docker-compose stop

# remove, -v is removing the database volume
sudo docker-compose down
sudo docker-compose down -v
```

# Reference

- [Docker Tutorial | Introduction To Docker & Containerization | Edureka](https://www.edureka.co/blog/docker-tutorial?utm_source=youtube&utm_medium=description&utm_campaign=what-is-docker-lcQfQRDAMpQ)
- [What is Docker | Docker Tutorial for Beginners | Docker Container | DevOps Tools | Edureka](https://www.youtube.com/watch?v=lcQfQRDAMpQ)
- [How to Install Docker On Ubuntu 18.04 {2019 Tutorial} | PhoenixNAP](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04)
- [Install Docker Compose](https://docs.docker.com/compose/install/)
- [Quickstart: Compose and WordPress](https://docs.docker.com/compose/wordpress/)
- [nezhar/wordpress-docker-compose](https://github.com/nezhar/wordpress-docker-compose)
