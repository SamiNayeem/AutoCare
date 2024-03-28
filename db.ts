import { Pool } from 'pg';


const pool = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'AutoCare-MobileApp'
});

export default {
  query: (text: string, params: any[]) => pool.query(text, params)
};
