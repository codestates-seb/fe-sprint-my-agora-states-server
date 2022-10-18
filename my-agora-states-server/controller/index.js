const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredData;
    //console.log(typeof(id))//string
    if(id){
      filteredData = discussionsData.find(item => item.id === Number(id)); //.find is recommended over filter. Since we're looking for a single element in an array, iterating through all the elements might include unnecessary steps.
     filteredData ? res.status(200).send(filteredData)  // If data found, returns the data
     : res.status(404).send("Requested data does not exist"); // If data not found, throw error
    }

    else{
      res.status(404).send("Please put all the required parameters. required params: id") // Reqests must be in a proper format. If not, throw error 
    } 
  }

};

module.exports = {
  discussionsController,
};
