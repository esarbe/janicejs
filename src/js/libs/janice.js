define(function () {
  return {
    CreateCharacter: function (name) {
      return {
        attributes: {
          name: "",
          age: "",
          species: "",
          experience: 0,
          reputation: 0
        },

        skillgroups: {
          melee: 0,
          ranged: 0,
          athletics: 0,
        },

        skills: [
          { name: "foo", group: "ranged", level: 1, value: 0 }  
        ]
      }
    } 
  }
});
