module.exports.doSomething = (req, res, next) => {
  res.json({ date: (new Date()) });
}

const doSomethingElse = (req, res, next) => {
  res.json({ date: (new Date()) });
}
module.exports.doSomethingElse = doSomethingElse;
