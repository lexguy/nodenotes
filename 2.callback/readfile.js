/*
 * @Author: xuwei
 * @Date: 2021-02-08 11:34:49
 * @LastEditTime: 2021-02-08 11:39:18
 * @LastEditors: xuwei
 * @Description:
 */

var fs = require("fs");

/** ----------------------------------- 同步读取 ----------------------------------------- */
const data = fs.readFileSync("test.txt");
console.info("data", data); //Buffer 对象
console.info("dataString", data.toString()); // 文本

/** ----------------------------------- 异步读取 ----------------------------------------- */
fs.readFile("test.txt", (err, data) => {
  if (err) {
    return console.error("err", err);
  }
  console.info("data String", data.toString());
});
console.info("async done");
