// test text 

const logTest = () => {
    console.log('test');
}

const conflictTestFn = (id) => {
    if (typeof id === 'string') {
        console.log('this is string type');
    } else {
        console.log('this is not string type');
    }
}