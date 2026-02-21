"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
(0, vitest_1.describe)('Creator Interface and Data', function () {
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
    (0, vitest_1.it)('should have correct author data', function () {
        var _a, _b;
        (0, vitest_1.expect)(authors).toHaveLength(2);
        (0, vitest_1.expect)((_a = authors[0]) === null || _a === void 0 ? void 0 : _a.firstName).toBe("Harper");
        (0, vitest_1.expect)((_b = authors[0]) === null || _b === void 0 ? void 0 : _b.authored).toContain("To Kill a Mockingbird");
    });
    (0, vitest_1.it)('should have correct artist data', function () {
        var _a, _b;
        (0, vitest_1.expect)(artists).toHaveLength(2);
        (0, vitest_1.expect)((_a = artists[1]) === null || _a === void 0 ? void 0 : _a.firstName).toBe("Snoop");
        (0, vitest_1.expect)((_b = artists[1]) === null || _b === void 0 ? void 0 : _b.created).toContain("Tha Doggfather");
    });
    (0, vitest_1.it)('should have correct director data', function () {
        var _a, _b;
        (0, vitest_1.expect)(directors).toHaveLength(2);
        (0, vitest_1.expect)((_a = directors[0]) === null || _a === void 0 ? void 0 : _a.lastName).toBe("Nolan");
        (0, vitest_1.expect)((_b = directors[0]) === null || _b === void 0 ? void 0 : _b.directed).toHaveLength(2);
    });
    (0, vitest_1.it)('should have correct producer data', function () {
        var _a, _b;
        (0, vitest_1.expect)(producers).toHaveLength(2);
        (0, vitest_1.expect)((_a = producers[0]) === null || _a === void 0 ? void 0 : _a.firstName).toBe("Emma");
        (0, vitest_1.expect)((_b = producers[0]) === null || _b === void 0 ? void 0 : _b.produced).toContain("Inception");
    });
    (0, vitest_1.it)('should combine film creators correctly', function () {
        var _a, _b;
        var filmCreators = __spreadArray(__spreadArray([], directors, true), producers, true);
        (0, vitest_1.expect)(filmCreators).toHaveLength(4);
        (0, vitest_1.expect)((_a = filmCreators[0]) === null || _a === void 0 ? void 0 : _a.firstName).toBe("Christopher");
        (0, vitest_1.expect)((_b = filmCreators[2]) === null || _b === void 0 ? void 0 : _b.firstName).toBe("Emma");
    });
    (0, vitest_1.it)('should identify creator types correctly', function () {
        var filmCreators = __spreadArray(__spreadArray([], directors, true), producers, true);
        filmCreators.forEach(function (creator) {
            var isFilmCreator = false;
            if (Array.isArray(creator.directed) || Array.isArray(creator.produced)) {
                isFilmCreator = true;
            }
            (0, vitest_1.expect)(isFilmCreator).toBe(true);
        });
    });
    (0, vitest_1.it)('should extract full names correctly', function () {
        var testCreator = authors[0];
        var fullName = "".concat(testCreator === null || testCreator === void 0 ? void 0 : testCreator.firstName, " ").concat(testCreator === null || testCreator === void 0 ? void 0 : testCreator.lastName);
        (0, vitest_1.expect)(fullName).toBe("Harper Lee");
    });
    (0, vitest_1.it)('should handle creator with multiple works', function () {
        var _a, _b;
        var christopher = directors[0];
        (0, vitest_1.expect)(christopher === null || christopher === void 0 ? void 0 : christopher.directed).toBeDefined();
        (0, vitest_1.expect)((_a = christopher === null || christopher === void 0 ? void 0 : christopher.directed) === null || _a === void 0 ? void 0 : _a.length).toBeGreaterThan(0);
        (0, vitest_1.expect)((_b = christopher === null || christopher === void 0 ? void 0 : christopher.directed) === null || _b === void 0 ? void 0 : _b.join(", ")).toBe("Inception, Interstellar");
    });
});
