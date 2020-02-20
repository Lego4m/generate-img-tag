#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const target = "./";

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
  switch (item) {
    case ".jpg":
      return true;
    
    case ".png":
      return true;
    
    default:
      return false;
  }
}

function Log(message){
  console.log(`<img src="${message.replace("./", "")}">`);
}

search(target);