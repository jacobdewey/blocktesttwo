//% weight=100000000 color=#333333 icon="\uf234"
namespace blockTest{
//% blockId=when_@g_do_@a block="when"
export function when(a: () => void, g: boolean){
basic.forever(function () {
    
    if (g) {
        try {a} finally{}
    }
})

    
}



}