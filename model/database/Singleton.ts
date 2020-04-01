//const promisify = require('util');
const pg = require('pg'); 
const config = require('../../server.config');  

export class Singleton {
         pool: any;
         client: any;
         static uniqInstance: Singleton;

         constructor() {
           this.init();
         }
         async init() {
           this.pool = new pg.Pool(config.postgres);
           this.client = this.pool.connect();
         }

         static getUniqInstance(): Singleton {
           if (!this.uniqInstance) {
             this.uniqInstance = new Singleton();
             return this.uniqInstance;
           } else {
             return this.uniqInstance;
           }
         }
         close() {
           if (this.client) this.client.release();
           this.client = null;
         }

         async buildTables() {
           const q = `
        CREATE TABLE todo(
            id serial PRIMARY KEY,
            task VARCHAR (50) NOT NULL
        )
        `;
           this.pool.query(q);
         }
       }