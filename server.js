const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/', (req, res) => {
    res.send('3K is Back!');
  });


app.post('/user/onbordingform', async (req, res) => {
    try {
        const data = req.body;
        // const { name, mail_id } = k[1];
        // console.log(name, mail_id);
        // res.status(201).json({name,mail_id});
        const { name, mail_id, github_profile_link, linkedin_profile_link, twitter_profile_link } = data;
        const query = 'INSERT INTO user_details.users (name, mail_id, github_profile_link, linkedin_profile_link, twitter_profile_link) VALUES ($1, $2, $3, $4, $5) RETURNING id';
        const values = [name, mail_id, github_profile_link, linkedin_profile_link, twitter_profile_link];
        const result = (await pool.query(query, values)).rows;
        // console.log(result)
        const {id} = result[0]
        // console.log(id)
        for (let x of data.projects) 
        {
            const {project_name, github_link, live_demo_link, technology} = x;
            const query2 = 'INSERT INTO user_details.projects(user_id,project_name, github_link, live_demo_link, technology) VALUES ($1, $2, $3, $4, $5);'
            const values2 = [id,project_name, github_link, live_demo_link, technology]
            await pool.query(query2, values2);
        }
        
        const {password} = data;
        const query3 = 'INSERT INTO user_details.user_credential(user_id,user_mail, password) VALUES ($1, $2, $3);'
        const values3 = [id,mail_id,password]
        await pool.query(query3, values3);

        res.status(201).json("done 3K");
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
   });

app.post('/user/authenticate', async (req, res) => {
    try {
        const data = req.body;
        // const { name, mail_id } = k[1];
        // console.log(name, mail_id);
        // res.status(201).json({name,mail_id});
        const { mail,password } = req.body;
        const query = 'SELECT password from user_details.user_credential WHERE user_mail = $1;';
        const values = [mail];
        const result = (await pool.query(query, values));
        // console.log(result.rows[0].password)
        // const {id} = result
        if(result.rowCount == 1 )
        {
            if(result.rows[0].password == password)
            {
                res.status(201).json("true");
            }
            else
            {
                res.status(201).json("wrong password");
            }
        }
        else
        {
            res.status(201).json("no user with this email");
        }

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    });
    

  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });