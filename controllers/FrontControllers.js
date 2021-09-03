function redirectExitController(req, res) {
  res.redirect('/index');
};

function goIndexController(req, res) {
  res.render("index");
};

export {
  redirectExitController,
  goIndexController
}