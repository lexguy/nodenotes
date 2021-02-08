/*
 * @Author: xuwei
 * @Date: 2021-02-08 11:45:53
 * @LastEditTime: 2021-02-08 11:50:34
 * @LastEditors: xuwei
 * @Description:
 */

var event = require("events");

const eventEmitter = new event.EventEmitter();

eventEmitter.on("data_received", () => {
  console.info("数据接收");
});

console.info("Done");

eventEmitter.on("connected", () => {
  console.info("连接成功");
  eventEmitter.emit("data_received");
});

eventEmitter.emit("connected");
