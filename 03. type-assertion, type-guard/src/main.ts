interface Foo {    
    bar: number;
    bas: string;
}

let foo = {} as Foo;
foo.bar = 123;

// 타입 단언
const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = "hello";

// (!not null 타입 단언)
const bodyElement1 = document.querySelector('body')
bodyElement1!.innerText = "hello1";

// 타입 가드
const bodyElement2 = document.querySelector('body') 
if (bodyElement2) {
    bodyElement2.innerText = "hello2";
}


// toLowerCase - string 타입이 가지는 Value
// 타입 가드 사용 - null이 if 문 안에 들어갈 일이 없어짐
function func(arg: string | null) {
    if (arg) {
        return (arg as string).toLowerCase();
    }
}

func("hello");
func(null);