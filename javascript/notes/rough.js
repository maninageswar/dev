obj = { name: "sai" };
obj.age = 24;
console.log("name" in obj);

s = "gehho";
f = {};
for (const i of s) {
  f[i] = 0;
}
let k = f["h"] + 1;
console.log(k);


