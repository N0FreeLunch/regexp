## 정규표현식 객체

## exec
### 문법
- `RegExp.prototype.exec(문자열)`
- RegExp는 정규표현식을 나타내는 객체이다.
- 정규표현식 객체 내부의 메소드(exec)로 접근한다.
- 주어진 문자열에 정규표현식 RegExp 객체에 매칭되는 문자열이 있으면 매칭된 문자열을 반환

## 예제
### 대소문자를 구분하여 매칭
```
result = /sp/.exec('sports');
```
- sp가 반환 됨
```
result = /sp/.exec('SPORTS');
```
- 반환 값이 없으므로 null을 반환

### 대소문자를 구분하지 않고 매칭
```
var param = /sp/i;
result = param.exec('sports');
```
- sp가 반환 됨
```
result = param.exec('SPORTS');
```
- SP가 반환 됨