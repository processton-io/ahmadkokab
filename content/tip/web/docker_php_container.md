---
id: SJ4YVVXqA
type: tip
layout: tip-builder
title: Docker PHP Container
permalink: /tip/docker-php-container/
skills:
  - 8yMRwEgCD
  - mzmtA0c51
  - rUdqapO-S
  - a6T5VF2ES
  - VXmvRZXol
  - y11O2n2-m
code:
  code: |-
    version: "3"
    services:
        app:
            build:
                context: ./docker
                dockerfile: Dockerfile # See this url
            image: app/php
            container_name: idas_app
            restart: unless-stopped
            tty: true
            ports:
                - '9001:9001'
            environment:
                SERVICE_NAME: idas_app
                SERVICE_TAGS: dev
            working_dir: /var/www
            volumes:
                - ./:/var/www
                - ./docker/php/local.ini:/usr/local/etc/php/conf.d/local.ini
            networks:
                - app_network
  lang: yaml
seo:
  ogimage: /img/afk_logo-removebg.png
---
