class MyString {

    reverse(str) {
        return str.split("").reverse().join("");
    }
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }
    ucWords(str) {
        return str.split(' ').map(element => {
            return element.length > 0 ? element.charAt(0).toUpperCase() + element.substring(1) : "";
        }).join(' ');
    }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde 