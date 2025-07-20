export default function logger(req, res, next) {
  const now = new Date();
  console.log(`${now} - ${req.method} - ${req.path}`);
  next();
}
