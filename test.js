// test text 

const logTest = () => {
    console.log('test');
}
// 주석추가
const conflictTestFn = (id) => {
    if (typeof id === 'string') {
        console.log('this is string type');
    } else {
        console.log(`this is ${typeof id} type`);
    }
}