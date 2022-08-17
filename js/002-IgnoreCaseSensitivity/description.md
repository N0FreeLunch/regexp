## ignore case sensitivity

## match
### 문법
- `string.prototype.match(정규표현식)`
- 정규표현식에 매칭되는 문자를 반환한다.

## 예제
### 대소문자 구분하여 매칭
```
result = 'sports'.match(/sp/);
```
- 소문자 `sp`와 매칭되는 문자가 존재하므로 `sp`를 반환
```
result = 'SPORTS'.match(/sp/);
```
- 소문자 `sp`와 매칭되는 문자가 없으므로 `null`을 반환

### 대소문자 구분 하지 않고 매칭
```
result = 'sports'.match(/sp/i);
```
- 대소문자 관계 없이 `sp`에 매칭되는 문자열이 있으므로 `sp`를 반환
```
result = 'SPORTS'.match(param);
```
- 대소문자 관계 없이 `sp`에 매칭되는 문자열이 있으므로 `SP`를 반환