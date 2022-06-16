export enum ColumnType {
    Number,
    String,
    Decimal,
    Boolean
};

export class constraint {
    columnName: string;
    constraintTableName: string;
    constraintColumnName : string;

    constructor(columnName: string, constraintTableName: string, constraintColumnName: string) {
        this.columnName = columnName;
        this.constraintTableName = constraintTableName;
        this.constraintColumnName = constraintColumnName;
    }
}