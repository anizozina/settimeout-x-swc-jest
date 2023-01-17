export const targetFunction = async (fn: Function) => {
  console.log('start');
  for (let i = 1; i <= 3; i++) {
    console.log('start loop:', i);
    await fn();
    console.log('function called', i);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('hoge', i);
        resolve('');
      }, 1 * 1000);
    });
    console.log('end loop:', i);
  }
  console.log('end');
};
