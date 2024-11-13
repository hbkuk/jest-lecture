export function error() {
    throw new Error();
}

export class CustomerError extends Error {}

export function customError() {
    throw new CustomerError();
}