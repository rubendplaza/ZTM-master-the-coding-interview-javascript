//user object
//all properties placed in memory at different addresses
let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("scream");
  },
};

//access
user.age // O(1)

//insert
user.spell = 'abra'; // O(1)

