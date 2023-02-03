import { User } from "./models/User";

const user = new User({ name: "myName", age: 20 });

user.on("change", () => {
  console.log("change callback");
});
user.on("change", () => {
  console.log("change callback1");
});

user.trigger("change");
