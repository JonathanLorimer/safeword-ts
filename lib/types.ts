import { BN } from 'bn.js'
import { WordsError, Just, just, ErrorEnum } from './error'

export interface MetaInteger {
	words: WordsEnum
	signed: boolean
	value: BN
}

export interface Uint8 {
	words: 8
	signed: false
	value: BN
}
export interface Uint16 {
	words: 16
	signed: false
	value: BN
}
export interface Uint32 {
	words: 32
	signed: false
	value: BN
}
export interface Uint64 {
	words: 64
	signed: false
	value: BN
}

export interface Uint128 {
	words: 128
	signed: false
	value: BN
}

export interface Uint256 {
	words: 256
	signed: false
	value: BN
}

export type Uint = Uint8 | Uint16 | Uint32 | Uint64 | Uint128 | Uint256

export interface Int8 {
	words: 8
	signed: true
	value: BN
}
export interface Int16 {
	words: 16
	signed: true
	value: BN
}
export interface Int32 {
	words: 32
	signed: true
	value: BN
}
export interface Int64 {
	words: 64
	signed: true
	value: BN
}

export interface Int128 {
	words: 128
	signed: true
	value: BN
}

export interface Int256 {
	words: 256
	signed: true
	value: BN
}

export type Int = Int8 | Int16 | Int32 | Int64 | Int128 | Int256

export type WordsEnum = 8 | 16 | 32 | 64 | 128 | 256

export type Integer = Uint | Int

export type Constructable = string | number | BN

// Might need to paramaterize the 'Left' and 'Right' value
export type SafeNumber<Error, Value> = WordsError<Error> | Just<Value>

export const liftSafeNumber = <Input, Output>(
	fn: (x: Input) => SafeNumber<ErrorEnum, Output>
) => (value: SafeNumber<ErrorEnum, Input>) =>
	value.isError === true ? value : fn(value.value)
