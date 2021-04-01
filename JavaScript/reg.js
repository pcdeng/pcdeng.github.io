var str = "              He/???.,;'??llow word                 ";
var reg = /^(\s+)|[/?,.;']|(\s+$)/ig;
var re = str.replace(reg, '');
console.log(re);