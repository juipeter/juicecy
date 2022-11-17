
//ส่วนของการดึง ข้อมูล
app.post("/signinadmin", jsonParser, function (req, res, next) {
  db.execute(
    "SELECT * FROM admin_table WHERE User_Admin=?",
    [req.body.User_Admin],
    function (err, admin_table, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (admin_table.length == 0) {
        res.json({ status: "error", message: "NOT A D M I N" });
        return;
      }
      bcrypt.compare(
        req.body.Pass_Admin,
        admin_table[0].Pass_Admin,
        function (err, isLogin) {
          if (isLogin) {
            var token = jwt.sign(
              { User_Admin: admin_table[0].User_Admin },
              secret,
              { expiresIn: "1h" }
            );
            res.json({ status: "ok", message: "ADMIN LOGIN SUCCESS", token });
          } else {
            res.json({ status: "error", message: "ADMIN LOGIN Failed" });
          }
        }
      );
    }
  );
});

app.post("/authen", jsonParser, function (req, res, next) {
  try {
    var token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, secret);
    res.json({ status: "ok", decoded });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
});
