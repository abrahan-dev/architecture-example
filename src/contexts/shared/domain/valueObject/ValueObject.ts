import { InvalidArgumentError } from './InvalidArgumentError';

export type Primitives = string | string | number | boolean | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
    readonly value: T;

    constructor(value: T) {
        this.value = value;
        this.ensureValueIsDefined(value);
    }

    equals(other: ValueObject<T>): boolean {
        return other.constructor.name === this.constructor.name && other.value === this.value;
    }

    toString(): string {
        return this.value.toString();
    }

    private ensureValueIsDefined(value: T): void {
        if (typeof value === 'undefined') {
            throw new InvalidArgumentError('Value Object: Value must be defined');
        }
    }
}
