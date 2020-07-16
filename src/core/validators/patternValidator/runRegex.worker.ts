import safeRegex from 'safe-regex';

const ctx: Worker = self as any;

export const execute = (pattern, value) => {
  if (!safeRegex(pattern)) {
    // If it is unsafe, we simulate that it is a match
    return true;
  }
  return new RegExp(pattern).test(value);
};

self.addEventListener('message', (event) => {
  const {
    data: { pattern, value },
  } = event;
  ctx.postMessage({ result: execute(pattern, value) });
});
