// Type Alias와 Inteface
// Type Alias - 타입 별칭: 확장 시 Intersection 사용
// Interface - 타입 정의: 확장 시 extends 사용
// 타입의 이름을 지정하는 방법으로 유사

// Type Alias
type Animal1 = {
    name: string
}

// intersection operator
type Bear1 = Animal1 & {
    honey: boolean
}

const bear1: Bear1 = {
    name: 'honey bear',
    honey: true
}


// Interface
interface Animal {
    name: String;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear: Bear = {
    name: 'Honey Bear',
    honey: true
}

// Interface는 선언 병합 가능(type에서는 X)
interface Animal2 {
    name: String;
}

interface Animal2 {
    honey: boolean;
}

const bear2: Animal2 = {
    name: 'Honey Bear2',
    honey: true
}