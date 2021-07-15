/**
 * Call the method defined on the parent, then call the method on the child.
 * @param parent Parent on whom call the method
 * @param child Child on whom call the method
 * @param methodName Name of the method to call
 * @returns A function calling the method defined in the Parent then call the method defined in Child.
 */
export const callParentAndChildMethod = (parent, child, methodName) => (
  ...args
) => {
  parent && methodName && parent[methodName]
    ? parent[methodName](...args)
    : null;
  child && methodName && child[methodName] ? child[methodName](...args) : null;
};
