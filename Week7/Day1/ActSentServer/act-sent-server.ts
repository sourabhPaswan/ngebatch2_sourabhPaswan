import express from "express";

const app = express();

app.get("/request/submit", (req, res) => {
  //database query and resuest logic
  res.send({ status: "success", message: "request submitted successfully." });
  res.end();
});

const PORT = 3939;
app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`);
});
