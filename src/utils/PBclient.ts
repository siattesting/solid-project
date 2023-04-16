import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export const getTodos = async () => {
  const serializeNonPOJOs = (value: object | null) => {
    return structuredClone(value);
  };
  try {
    const records = await pb.collection('todos').getFullList({
      sort: '-created',
    });
    // console.log(records);
    return {
      todos: structuredClone(records),
    };
  } catch (error) {
    console.log(error);
  }
};
