var str = "              He/???.,;'??llow word                 ";
var reg = /^(\s+)|[/?,.;']|(\s+$)/gi;
var re = str.replace(reg, '');
console.log(re);
