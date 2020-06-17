//% weight=100000000 color=#333333 icon="\uf234"
namespace blockTest{
//% blockId=when_do block="when  |a: %a|g: %g"
export function when(a: () => void, g: boolean){
basic.forever(function () {
    
    if (g) {
        try {a} finally{}
    }
})

    
}



}