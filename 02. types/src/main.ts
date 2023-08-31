// Boolean

let boolean: boolean;
let falseBoolean: boolean = false;


// Number

let number: number;
let integer: number = 6;
let float: number = 3.14;


// string

let string: string;
let firstName: string = 'jio';
let lastName: string = 'jung';



// Array
// 한 가지 타입만 가지는 배열

let names1: string[] = ['jio', 'jung'];
let names2: Array<string> = ['jio', 'jung'];

// 여러 타입을 가지는 배열(유니언 타입 사용)

let array1: (string | number)[] = ['jio', 1, 2];
let array2: Array<string | number> = ['jio', 1, 2];


// 읽기 전용 배열 생성(readonly) - push() 사용 불가

let stringArray: readonly string[] = ['jio', 'jung'];
let numberArray: ReadonlyArray<number> = [1, 2, 3];


// Tuple
// 배열과 비슷하지만 해당 자리에 정해진 타입, 고정된 길이를 지켜야 함

let tuple1: [string, number];
tuple1 = ['jio', 1];
// tuple1 = ['jio', 1, 2];  // error

let tuple2: [string, number, boolean] = ['jio', 1, true];


// Any



// Unknown
// 알 수 없는 타입 - 어떠한 값도 할당 가능, 다른 타입에는 할당 불가능

let unknown: unknown = false;
// let string1: string: unknown;    // Error: unknown을 다른 타입에는 할당 불가
let string2: string = unknown as string; // 강제 할당


// Object
// typeof 연산자를 이용해 object로 반환하는 모든 타입

let obj: object = {};
let arr: object = [];
// let nul: object = null;
let date: object = new Date();

let obj1: {id: number, title: string, desc: string } = {
    id: 1,
    title: 'title1',
    desc: 'desc1'
}


// Union (2개 이상의 타입 허용)
let union: (string | number);
union = 'hi';
union = 123;


// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x,y) {
    return x*y;
}

let func2: () => void;  // 반환하는게 없으므로
func2 = function () {
    console.log('hi');
}


// Null, Undefined
// "strictNullChecks": false일 때 아래와 같이 할당 가능
let number1: number = undefined;
let string1: string = null;
let object: {a:1, b: false} = undefined;
let array: any[] = null;
let undefined1: undefined = null;
let null1: null = undefined;

// 예외("strictNullChecks"이 true여도)
let void2: void = undefined;


// Void(주로 값을 반환하지 않는 함수에서 사용)
function greeting(): void{
    console.log("hello~");
}


// Never
// 어떤 일이 절대 일어나지 않을 것이라고 확신할 때 사용

// 1. Error를 throw할 때 사용
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// 2. 무한루프
function keepProcessing(): never {
    while (true) {
        console.log('processing...');
    }
}