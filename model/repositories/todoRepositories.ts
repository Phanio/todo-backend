 
 import { Singleton } from '../database/Singleton';
 
export class TodoRepository {
       

       static  async create(task:String) {
           const result = await Singleton.getUniqInstance().client.query({
             text: `INSERT INTO todo (task)
                VALUES ($1) RETURNING *`,
             values: [task]
           });
           return result.rows[0];
         }

         static async getTasks() {
           const result = await Singleton.getUniqInstance().client.query(
             `SELECT id, task FROM todo`
           );
           return result.rows;
         }

         static async deleteTask(idTask: Number){
             const result = await Singleton.getUniqInstance().client.query({
              text: `DELETE * FROM todo WHERE id=$1`,
               values: [idTask]
             });
             return result.rows;
         }
       }