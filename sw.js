self.addEventListener("push", function(e) {
  var data = e.data;
  if (e.data) {
    data = data.json();
    console.log("push的数据为：", data);
    self.registration.showNotification(data.text);
  } else {
    console.log("push没有任何数据");
  }
});
