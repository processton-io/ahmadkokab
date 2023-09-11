---
id: WfqPPmMMT
type: post
layout: post
title: Setting up a Multi-Project Docker Environment
permalink: /stories/setting-up-a-multi-project-docker-environment/
photo:
  image: /img/img-blog-docker-mitrais.jpg
  alt: Setting up a Docker Environment
date: 2023-09-10T23:45:31.554Z
author: a1d1172a-8736-47c1-831d-3e508729fee2
excerpt: In my 11-year journey as a developer, I faced the challenge of managing
  diverse projects, including Node.js, Laravel, Drupal, and more, often adopting
  microservices. To streamline my workflow, I created a versatile Docker
  environment.
seo:
  ogimage: /img/img-blog-docker-mitrais.jpg
  title: Setting up a Multi-Project Docker Environment
  description: In my 11-year journey as a developer, I faced the challenge of
    managing diverse projects, including Node.js, Laravel, Drupal, and more,
    often adopting microservices. To streamline my workflow, I created a
    versatile Docker environment.
---
### Why We Need It

We've collectively amassed over 11 years of experience in software development, and our portfolio comprises diverse projects with varying skillsets and technologies. From Node.js applications built using GatsbyJS, React, Vue, and npm packages to projects leveraging Laravel, Drupal, WordPress, and Netlify CMS, we've embraced a broad spectrum of tools and frameworks. In recent times, many of our projects have adopted microservices architecture, requiring us to establish an environment that fosters independence and easy integration, much like adding a new building block to an existing structure.

### What We Planned For

When we contemplated the challenges we regularly encounter in our diverse development endeavors, we embarked on a critical brainstorming process. After conducting an in-depth analysis, we arrived at the following conclusions:

**i. Nginx Proxy:** To manage routing effectively since Docker containers cannot share pre-used ports, we decided to employ an Nginx proxy.

**ii. Storage Space:** Given that several of our projects involve media handling, S3 has become a standard choice. After evaluating various tools, we determined that Minio would be our ideal storage solution.

**iii. Email Handling:** We needed a solution to manage emails, and Mailpit was selected for this purpose.

**iv. Database Services:** Most of our applications rely on MySQL, but we are also considering adding MariaDB and PostgreSQL, as some projects require them.

**v. MongoDB:** One of our projects utilizes MongoDB, necessitating its inclusion in our environment.

**vi. Log Monitoring:** To facilitate easy log observation, we opted for LogSniffer.

**vii. Node Container:** For processing Node.js applications.

**viii. Storybook Container:** To run and visualize visual changes efficiently.

**ix. Redis Server:** To support caching and other data-intensive operations.

In addition to these primary services, we decided to incorporate some secondary services such as phpMyAdmin, Mongo Express, and Redis Insights for enhanced flexibility.

Our folder structure will be organized as follows:

* ***Apps:*** This folder will contain the individual projects.
* ***Certificates:*** Here, we'll store certificates from various services, including the Nginx Proxy Manager.
* ***Data:*** This folder will store database data for persistence, including MySQL, PostgreSQL, and MongoDB.
* ***Docker:*** This directory will contain YAML files and images for our Docker containers.
* ***Storage:*** This folder is crucial, as losing it along with the data folder would mean resetting the entire environment. It stores data from Minio, the proxy server, and Redis Insights.

### Categorizing Ports

To simplify our management of ports, we've categorized them as follows:

i. Ports 80, 81, and 443 are allocated for the proxy server.
ii. Ports in the 30 range are designated for backend services like Mailpit and ports used for connections via applications like MySQL.
iii. Ports in the 80 range will serve containers hosting websites.
iv. Ports in the 90\*\* range are reserved for backend processes, such as the PHP-FPM container.

### Let's Get Coding

To maintain a clean and organized structure, we'll use separate Docker files and import them as needed:

```yaml
version: "3"
services:
  - ./docker/proxy-docker-compose.yml
  ## INDEX:80,443 PORTAL:81 
  ## Setup Proxy Server

  - ./docker/minio-docker-compose.yml
  ## INDEX:3026 PORTAL:8024 

  - ./docker/mailpit-docker-compose.yml
  ## INDEX:3025 PORTAL:8025 
  ## Setup Email Server

  - ./docker/mysql-docker-compose.yml
  - ./docker/phpmyadmin-docker-compose.yml
  ## INDEX:3306 PRTAL: 8026
  ## Setup MySql Environment

  - ./docker/mongo-docker-compose.yml
  - ./docker/express-docker-compose.yml
  ## INDEX:27017 PORTAL:8027 
  ## Setup Mongo DB Environment

  - ./docker/logsniffer-docker-compose.yml
  ## PORTAL:8028 
  ## Setup LogSniffer Environment

  - ./docker/node-docker-compose.yml
  - ./docker/storybook-docker-compose.yml
  ## PORTAL:8029 
  ## Setup Node Processing and Tests Environment

```

### Setting Up Docker Services Files

To implement our multi-project Docker environment, we'll need the following Docker Compose files:

1. **Proxy Docker Compose**

   * Responsible for managing routing via Nginx.
   * [Link to detailed configuration for Proxy Docker Compose](proxy-docker-compose.yml)
2. **Minio Docker Compose**

   * Provides storage space using Minio for media handling.
   * [Link to detailed configuration for Minio Docker Compose](minio-docker-compose.yml)
3. **Mailpit Docker Compose**

   * Handles email services using Mailpit.
   * [Link to detailed configuration for Mailpit Docker Compose](mailpit-docker-compose.yml)
4. **MySQL Docker Compose**

   * Sets up MySQL environment.
   * [Link to detailed configuration for MySQL Docker Compose](mysql-docker-compose.yml)
5. **phpMyAdmin Docker Compose**

   * Complements MySQL setup with phpMyAdmin for easy database management.
   * [Link to detailed configuration for phpMyAdmin Docker Compose](phpmyadmin-docker-compose.yml)
6. **MongoDB Docker Compose**

   * Establishes MongoDB environment.
   * [Link to detailed configuration for MongoDB Docker Compose](mongo-docker-compose.yml)
7. **Mongo Express Docker Compose**

   * Enhances MongoDB setup with Mongo Express for convenient administration.
   * [Link to detailed configuration for Mongo Express Docker Compose](express-docker-compose.yml)
8. **LogSniffer Docker Compose**

   * Sets up LogSniffer for efficient log monitoring.
   * [Link to detailed configuration for LogSniffer Docker Compose](logsniffer-docker-compose.yml)
9. **Node Docker Compose**

   * Provides a container for processing Node.js applications.
   * [Link to detailed configuration for Node Docker Compose](node-docker-compose.yml)
10. **Storybook Docker Compose**

    * Sets up an environment for running and visualizing visual changes with Storybook.
    * [Link to detailed configuration for Storybook Docker Compose](storybook-docker-compose.yml)

By using these Docker Compose files, you'll be able to seamlessly integrate and manage your diverse projects in a multi-project Docker environment. Each linked file contains detailed configurations and instructions for setting up the respective services. Feel free to refer to them for a smooth setup process.

With this comprehensive environment in place, you'll be well-equipped to handle a wide range of projects with different skill sets and technologies. Happy coding!