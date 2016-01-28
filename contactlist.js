var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "555-1234",
        address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
        },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "123-4567",
        address: ['One Infinite Loop', 'Cupertino', 'CA', '95014']
        },
    steven: {
        firstName: "Steven",
        lastName: "Universe",
        number: "345-6789",
        address: ['Gem Temple', 'Beach City', 'USA', '12345']
        }
};

var list = function (friends) {
    for (var firstName in friends){
        console.log(firstName);
    }
};

var search = function(name){
    for (var key in friends){
        if (friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        }
    }
};
