const camelizeRE = /-(\w)/g;
function camelize(str) {
    console.log(str);
    return str.replace(camelizeRE,
        function (_, c) {
            console.log(_, c);
            return c
                ? (c.toUpperCase())
                : ""
                ;
        }
    );
}


let b = '-payton-Deng-d-c-f';
const c = a(b);

console.log(c);