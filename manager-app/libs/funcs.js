export const emptyFunc = () => {
}

export const notImplementedFunc = () => {throw "Not implemented"}

function *copyOfCopy(name) {
    while(true) {
        name += " (kopia)"
        yield name
    }
}

export const getNameOfCopy = (allNames, name) => {
    let newName = name;
    const nameGen = copyOfCopy(newName)
    while(allNames.includes(newName)) {
        newName = nameGen.next().value
    }
    return newName
}