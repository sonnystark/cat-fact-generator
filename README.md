# Cat Fact Generator

A Node.js generator app that is fetching and displaying data from multiple APIs.

## Built with following software
- Express.js
- node-fetch
- dotenv
- nodemon

This was a fun project to build and a good exercise in how to use multiple sources of API and display them asynchronously using **HTML**, **JavaScript** and **CSS**. 

I also had to do some refactoring and configurations since I updated **Node.js** to version 18, which lead to some complications.
This s what I learned:

I was building a project using Express.js and the app kept crashing all the time because I had updated Node.js to version 18. What I didn't know was that with the new update, Node.js has changed how to import packages and files.
First of all, you are now using an asynchronous ES module loader. This requires us to make some configurations.
- Instead of using the "require" statement (const express = require('express')) you now have to use the import statement (import express from 'express').
- You also need to change the extension from index.js to index.mjs for it to work.
From what I understand you can still use the .js extension but then you will have to configure your package.json file and set it to "type": "module".
Hope this helps. It took me a while to understand the issues the new update brought with it.

On to the next project.
Happy coding!