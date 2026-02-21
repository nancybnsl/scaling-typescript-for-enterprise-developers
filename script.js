var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b, _c, _d;
var authors = [
    {
        firstName: "Harper",
        lastName: "Lee",
        authored: ["To Kill a Mockingbird", "Go Set a Watchman"]
    },
    {
        firstName: "Aldous",
        lastName: "Huxley",
        authored: ["Brave New World", "The Doors of Perception"]
    }
];
var artists = [
    {
        firstName: "Pink",
        lastName: "Floyd",
        created: ["The Dark Side of the Moon", "The Wall"]
    },
    {
        firstName: "Snoop",
        lastName: "Dogg",
        created: ["Tha Doggfather", "Coolaid"]
    }
];
var directors = [
    {
        firstName: "Christopher",
        lastName: "Nolan",
        directed: ["Inception", "Interstellar"]
    },
    {
        firstName: "Stanley",
        lastName: "Kubrick",
        directed: [
            "2001: A Space Odyssey",
            "A Clockwork Orange"
        ]
    }
];
var producers = [
    {
        firstName: "Emma",
        lastName: "Thomas",
        produced: ["Inception", "Interstellar"]
    },
    {
        firstName: "Katharina",
        lastName: "Otto-Bernstein",
        produced: ["Absolute Wilson", "Beuys"]
    }
];
var creators = {
    authors: authors,
    artists: artists,
    directors: directors,
    producers: producers
};
for (var _i = 0, _e = creators.authors; _i < _e.length; _i++) {
    var creator = _e[_i];
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is an author who wrote the books ").concat((_a = creator.authored) === null || _a === void 0 ? void 0 : _a.join(", ")));
}
for (var _f = 0, _g = creators.artists; _f < _g.length; _f++) {
    var creator = _g[_f];
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is an artist who created the albums ").concat((_b = creator.created) === null || _b === void 0 ? void 0 : _b.join(", ")));
}
for (var _h = 0, _j = creators.directors; _h < _j.length; _h++) {
    var creator = _j[_h];
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is a director who directed the movies ").concat((_c = creator.directed) === null || _c === void 0 ? void 0 : _c.join(", ")));
}
for (var _k = 0, _l = creators.producers; _k < _l.length; _k++) {
    var creator = _l[_k];
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is a producer who produced the movies ").concat((_d = creator.produced) === null || _d === void 0 ? void 0 : _d.join(", ")));
}
var filmCreators = __spreadArray(__spreadArray([], directors, true), producers, true);
for (var _m = 0, filmCreators_1 = filmCreators; _m < filmCreators_1.length; _m++) {
    var creator = filmCreators_1[_m];
    var creatorType = "<unknown>";
    var created = [];
    if (Array.isArray(creator.directed)) {
        creatorType = "director";
        created = creator.directed;
    }
    else if (Array.isArray(creator.produced)) {
        creatorType = "producer";
        created = creator.produced;
    }
    console.log("".concat(creator.firstName, " ").concat(creator.lastName, " is a ").concat(creatorType, " who helped create ").concat(created.join(", ")));
}
