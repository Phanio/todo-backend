export declare class Singleton {
    pool: any;
    client: any;
    static uniqInstance: Singleton;
    constructor();
    init(): Promise<void>;
    static getUniqInstance(): Singleton;
    close(): void;
    buildTables(): Promise<void>;
}
