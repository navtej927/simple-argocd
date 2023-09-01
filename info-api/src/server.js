const { App } = require("./app");
const PORT = process.env.PORT || 9090;

App.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
