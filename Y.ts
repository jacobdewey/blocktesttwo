//% weight=100000000 color=#333333 icon="\uf234"
namespace moreBasic{
//% blockId=when_do block="when  %boolean"
export function when(g: boolean, a: () => void): void{
    while(true) {
    if (g) {
       a
    }
    }
    
}




}