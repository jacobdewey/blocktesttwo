//% weight=100000000 color=#333333 icon="\uf234"
namespace blockTest{
//% blockId=when_do block="when  %boolean"
export function when(g: boolean, a: () => void){
basic.forever(function () {
    
    if (g) {
        try {a} finally{}
    }
})

    
}



}