
module.exports = {
  renderIndexPage: renderIndexPage
}

function renderIndexPage (req,res,next) {
  res.render('index', { title: 'Traffcity'});
}
