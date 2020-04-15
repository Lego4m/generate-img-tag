#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const target = './';
const exts = ['.jpg', '.png'];

function search(dir){
  fs.readdirSync(dir).forEach(item => {
    if (fs.lstatSync(dir + item).isDirectory()){
      search(dir + item + '/');
    } else {
      if (isImage(path.extname(item))){
        Log(dir + item);
      }
    }
  });
}

function isImage(item){
  return exts.includes(item);
}

function Log(message){
  console.log(`<img src="${message.replace('./', '')}">`);
}

search(target);