/**
 * # bounded
 *
 * Helper method to bind class instance methods to it's own context.
 *
 * @template Type The type of the class instance.
 * @param { Type } instance Instance to bind methods to.
 * @returns { Type } Instance with bound methods.
 */
export function bounded(instance) {
  const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(instance))

  methods.forEach((method) => {
    if (typeof instance[method] === 'function') {
      instance[method] = instance[method].bind(instance)
    }
  })

  return instance
}

/**
 * # maybe
 *
 * Helper function to wrap an async task that might fail
 *
 * @template Type Output type of the task
 * @param { () => Promise<Type> | Promise<Type> } task Task to wrap in a maybe function
 * @returns { Promise<{ ok: Type, err: Error }> } Promise that resolves to a maybe object
 */
export async function maybe(task) {
  const promise = typeof task === 'function' ? task() : task

  try {
    return {
      ok: await promise,
      err: null,
    }
  } catch (err) {
    return {
      ok: null,
      err: new Error(`${err}`),
    }
  }
}
