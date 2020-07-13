// eslint-disable-next-line import/default
/* istanbul ignore file */ // we need to investigate on how to add the unit test, because the prefix worker-loader!. is breaking the test
import Worker from 'worker-loader!./runRegex.worker';

const regexTimeout = 500;

/**
 * Executes a regex in a webworker, with a timeout, to make
 * sure that the browser does not crash.
 * Returns a promise that always resolves, with a boolean.
 */
export const safeRegexExecute = (pattern, value) => {
    const worker = new Worker();

    const workerPromise = new Promise((resolve) => {
        worker.postMessage({ pattern, value });
        worker.onmessage = function (event) {
            resolve(event.data.result === true);
        };
    });

    return Promise.race([
        // When the timeout expires because it was unsafe,
        // we consider it a pass, and will let the bot
        // handle the result.
        new Promise((resolve) => setTimeout(() => resolve(true), regexTimeout)),
        workerPromise,
    ]).finally(() => {
        worker.terminate();
    });
};
