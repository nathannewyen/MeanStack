module.exports = function () {
    return {
        add: function (num1, num2) {
            return num1 + num2; // should return 5
        },
        subtract: function (num1, num2) {
            return num1 - num2;
        },
        multiply: function (num1, num2) {
            return num1 * num2; // should return 15
        },
        square: function (num) {
            return num * num
        },
        random: function (num1, num2) {
            return Math.random(num1, num2);
        }
    }
};