function Sandbox() {
  var args = Array.prototype.slice.call(arguments), // 浅复制数组
    callback = args.pop(); // 取出数组第一个元素
  (modules = args[0] && typeof args[0] === "string" ? args : args[0]), i;

  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }

  this.a = 1;
  this.b = 2;

  if (!modules || modules === "*") {
    modules = [];
    for (i in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty(i)) {
        modules.push(i);
      }
    }
  }

  for (i = 0; i < modules.length; i += 1) {
    Sandbox.modules[modules[i]](this);
  }

  callback(this);
}

Sandbox.prototype = {
  name: "My Application",
  version: "1.0",
  getName: function () {
    return this.name;
  },
};
