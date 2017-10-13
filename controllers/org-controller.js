const axios = require('axios');

const orgsController = {}


orgsController.index = (req, res) => {
  res.render('orgs/org-index');
}

orgsController.statIndex = (req, res)=> {
  res.render('orgs/stats');
}

//orgsController.getData = (req, res) => {
//  axios.get(`https://projects.propublica.org/nonprofits/api/v2/search.json?q=${req.body.categories}`)
 // .then((res) => {
 //   console.log(res);
//  }).catch(err => console.error(err));
//}

orgsController.getData = (req, res) => {
  console.log("inside orgsController ", req.body)
axios.get(`https://projects.propublica.org/nonprofits/api/v2/search.json?q=${req.body.categories}`)
.then(({data:{organizations:orgs}}) => {
    const data = orgs.map(({name, city, state}) => ({name, city, state}))
    res.render('orgs/data', {data});
   }).catch(error => {
      console.log(error);
    });
   }

module.exports = orgsController;
