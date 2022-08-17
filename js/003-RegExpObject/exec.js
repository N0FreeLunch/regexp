var result;
result = /sp/.exec('sports');
show(result);

result = /sp/.exec('SPORTS');
show(result);

var param = /sp/i;
result = param.exec('sports');
show(result);

result = param.exec('SPORTS');
show(result);