import { RecordsRepository, RecordsRepositoryInterface } from './records'

export const RECORDS = Symbol('book')

export interface Repositories {
    [RECORDS]: RecordsRepositoryInterface;
}

export default {
    [RECORDS]: new RecordsRepository()
} as Repositories
