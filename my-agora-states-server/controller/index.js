const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;
const fs = require('fs');
const { v4: uuid } = require('uuid');
const { resolve } = require("path");




const getDataFromFilePromise = filePath => {
  return new Promise((resolve, reject)=>
  fs.readFile(filePath, 'utf8',(err, data) => {
    if (err) {
      reject(err); // 에러를 던집니다.
    }
    resolve(data);
  }))

};

const setDataFromFilePromise = async(filePath,data) => {
  let result = await new Promise((resolve, reject)=>
  fs.writeFile(filePath, data, 'utf8', (err) => {
    if (err) {
        console.log(err);
    }}))
    return result
};
//console.log(data.slice(discussionsData.indexOf('['),data.indexOf(']')+1))
//getDataFromFilePromise(require.resolve('../repository/discussions.js')).then(data=>{console.log(JSON.parse(data.slice(data.indexOf('['),data.lastIndexOf(','))))})
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  //discusstions/:id
  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const {id} = req.params;
    let data = discussionsData.filter(el=>el.id===Number(id));
    console.log(data);
    if(data.length === 0){
      return res.status(404).send('404 NOT FOUND');
    }
    return res.status(200).send(...data);
  },

  create: (req, res) =>{
    let obj = {
      id : uuid(),
      createdAt : new Date().toLocaleDateString('ko-KR'),
      updatedAt : new Date().toLocaleDateString('ko-KR'),
      title: req.body.title,
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
      author: req.body.author,
      answer: null,
      bodyHTML: req.body.bodyHTML,
      avatarUrl:
      "https://avatars.githubusercontent.com/u/79880249?s=64&v=4",
    }
    discussionsData = [obj, ...discussionsData];
    // // fs.writeFileSync('./hello.js', JSON.stringify(obj));
    // getDataFromFilePromise(require.resolve('../repository/discussions.js'))
    // .then(data=>{
    //   let arr = [data.slice(0,data.indexOf('[')+1), '\n'+JSON.stringify(obj)+',\n',data.slice(data.indexOf(']'))];
    //   let str=arr.join('')
    //   //setDataFromFilePromise(require.resolve('../repository/discussions.js'),str);
    // })
    // .catch(err=>console.log(err))
    
    
    return res.status(201).send(discussionsData);
  }
};

module.exports = {
  discussionsController,
};
