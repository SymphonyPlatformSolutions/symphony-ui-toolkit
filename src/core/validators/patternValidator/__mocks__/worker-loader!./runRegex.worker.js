export const postMessageMock = jest.fn();
export const terminateMock = jest.fn();
export const latestMock = [{}];

const mock = jest.fn().mockImplementation(() => {
    const mockImplementation = {
        postMessage: postMessageMock,
        terminate: terminateMock,
    };
    latestMock[0] = mockImplementation;
    return mockImplementation;
});

export default mock;
