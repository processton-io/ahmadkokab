---
id: 44d0d78e-1f11-4f92-85ac-d144d60bb573
type: post
layout: post
title: "Setting Up Netlify CMS: A Step-by-Step Guide"
permalink: /blog/setting-up-netlify-cms-step-by-step-guide/
thumbnail: /img/background.jpg
date: 2023-06-22T11:39:32.295Z
author: a1d1172a-8736-47c1-831d-3e508729fee2
excerpt: Netlify CMS is a popular content management system that allows you to
  easily manage and organize your website content. In this step-by-step guide,
  we will walk you through the process of setting up Netlify CMS from start to
  finish.
seo:
  ogimage: /img/decapcms.jpeg
  title: Setting Up Netlify CMS A Step-by-Step Guide
  description: A Step-by-Step Guide to setup netlify cms
---
## Prerequisites

Before we begin, make sure you have the following prerequisites in place:

* Node.js and npm installed on your machine.
* Yarn package manager installed.
* A code editor of your choice (e.g., Visual Studio Code).
* Basic knowledge of JavaScript and web development concepts.

## Step 1: Create a New Project

1. Open your terminal and create a new directory for your Netlify CMS project:

   ```shell
   mkdir netlify-cms
   cd netlify-cms
   ```
2. Initialize a new npm project by running the following command:

   ```shell
   npm init -y
   ```

## Step 2: Install Dependencies

1. Install the required dependencies using yarn:

   ```shell
   yarn add netlify-cms gatsby react react-dom
   ```
2. Additionally, you may need to install other packages depending on your specific project requirements, such as additional Gatsby plugins or a static site generator like Gatsby or Hugo.

## Step 3: Configure Netlify CMS

1. Create a new file named `config.yml` in the root of your project. This file will contain the configuration for Netlify CMS.

   ```gitconfig
   # config.yml
   backend:
     name: git-gateway
     branch: main

   media_folder: static/images
   public_folder: /images

   collections:
     - name: articles
       label: Articles
       folder: content/articles
       create: true
       slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
       fields:
         - { name: title, label: Title, widget: string }
         - { name: content, label: Content, widget: markdown }
   ```
2. Customize the configuration according to your needs. You can define multiple collections, each with its own set of fields.

## Step 4: Create Content Files

1. Create a new directory named `content` in the root of your project.
2. Inside the `content` directory, create a new directory for each collection you defined in the `config.yml`. For example, if you have an `articles` collection, create a directory named `articles`.
3. Inside the collection directory, create individual content files in YAML, Markdown, or JSON format. For example, you might create a file named `my-first-article.md`:

   ```markdown
   ---
   title: My First Article
   ---
   # Hello, World!
   This is my first article using Netlify CMS.
   ```

## Step 5: Start the Development Server

1. In your terminal, run the following command to start the development server:

   ```shell
   yarn develop
   ```
2. Open your web browser and visit `http://localhost:8000/admin`. You should see the Netlify CMS interface.
3. Log in using your preferred authentication method.

## Step 6: Generate the Public Static Website

1. When you are ready to generate the public static website, open a new terminal window and run the following command:

   ```shell
   yarn prod
   ```
2. The static website will be generated and placed in the `public` directory.
3. You can now deploy the contents of the `public` directory to your desired hosting provider.

## Conclusion

Congratulations! You have successfully set up Netlify CMS for your project. You can now leverage the power of Netlify CMS to manage your website content efficiently. Remember to explore the documentation for further customization options and integrations based on your specific requirements.

Happy content managing!