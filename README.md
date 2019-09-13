# Lab: A Static Frontend for TaskMaster

## Code and instructional contributions:

- Nick Paro
- Matt Stuhring
- Marisha Hosa
- Renee Messik

## How to deploy

git clone your-repo
npm install
npm run build
ftp build target.com/folder
npm run int-test

## a link to the deployed application on S3

http://taskmaster-frontend1.s3-website-us-west-2.amazonaws.com

## a link to the backend repo

https://github.com/Taskmaster-401/taskmaster/pull/3

## Overview

JSON is cool and all, but humans struggle with understanding it. Let’s admit our human failings by creating a web frontend with React to view this data in a more user-friendly way. 🤖

## Screen Shot

![Screen Shot](./ScreenShot.jpg?raw=true 'ScreenShot')

## Resources

- [The AWS Java SDK](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/welcome.html)
- [Configure S3 for Static Sites](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/static-website-hosting.html)

## Setup

Create a new repo `taskmaster-frontend` to hold your React app. Use `create-react-app` to generate a React app there.

For any necessary backend changes, continue working in your `taskmaster` repo, deployed via Elastic Beanstalk.

## Feature Tasks

- A user should be able to visit the homepage of your React app and see the list of all tasks available in the database.
- React should be well-factored into at least 2 components.
- The homepage should have reasonable styling and layout. (Nothing too fancy, but it shouldn’t make the user cringe.)

## Piglet image from

https://i.pinimg.com/474x/ee/40/3d/ee403d1a7f9e64d7c062b3ad8f4d7125--baby-piglets-micro-piglets.jpg

> Written with [StackEdit](https://stackedit.io/).
