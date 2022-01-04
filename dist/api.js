import Gen from 'sentence-generator'

const gen= Gen('context.txt');

const a=gen.take(1)
console.log(a)

export {a};
