import { User } from "./models/User";

const user = new User({
  name: "new record",
  age: -1,
});

// user.set({ name: "update name", age: 1000 });
// user.save();

user.events.on("change", () => {
  console.log("changes");
});

user.events.trigger("change");
