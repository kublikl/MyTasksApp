
 /*module.exports = function(req, res){ // CommonJS
  res.send('Server is running');
}*/


const homepage = (req, res) => {  
  res.send('Homepage is running');
}

export default homepage;