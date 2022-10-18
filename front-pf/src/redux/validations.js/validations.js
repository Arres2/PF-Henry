
export function validateCarrito (array, object) {
    const search = array.find(function (elm) {return elm.packageId === object.packageId})
    if (!search) return object
}

