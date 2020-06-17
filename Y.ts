//% weight=100000000 color=#333333 icon="\uf234"
namespace blockTest{
//% blockId=when_do block="when  |%()=>void|%boolean"
export function when(a: () => void, g: boolean){
basic.forever(function () {
    
    if (g) {
        try {a} finally{}
    }
})

    
}



}