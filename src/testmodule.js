console.log('testmodule');

const foo = async () => await Promise.resolve('test2');


foo().then( res => console.log(res));
