const set = new WeakSet();
const map = new WeakMap();
const idToObjMap = {};
const idToObjSet = {};

function incrementProductViews(productId) {
    const productIdObj = idToObjMap[productId] ?? {id: productId}
    if(map.has(productIdObj)) {
        map.set(productIdObj,map.get(productIdObj) + 1)
    } else {
        map.set(productIdObj, 1)
        idToObjMap[productId] = productIdObj
    }
    console.log(map.get(productIdObj))
}


function addToCart(productId) {
    const productIdObj = idToObjSet[productId] ?? {id: productId}
    if(set.has(productIdObj)) {
        console.log("Product already in cart")
    } else {
        set.add(productIdObj)
        console.log("Product added to cart")
        idToObjSet[productId] = productIdObj
    }
}

incrementProductViews("cushion")
incrementProductViews("table")
incrementProductViews("cushion")
incrementProductViews("table")

addToCart("cushion")
addToCart("table")
addToCart("cushion")


