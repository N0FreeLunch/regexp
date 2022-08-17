var lineNumber = 0;
var copyNumber = lineNumber;

function show(value, el){
  var ch,
    result;
    lineNumber += 1;
    copyNumber += 1;

    ch = document.createElement('div');
    ch.id = 'mc_result_' + lineNumber;
    document.getElementById(el || 'showArea').appendChild(ch);

    result = document.createTextNode(copyNumber+'. '+value);
    document.getElementById(ch.id).appendChild(result);
}
