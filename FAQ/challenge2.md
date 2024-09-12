## FAQ for Challenge 2

### What is a branch in Git, and why should I create one?
A branch in Git is like a separate version of your project where you can experiment with new ideas. By creating a branch, you can work on new features (like saving texts to a file) without affecting the main version of your app.

### What is filesystem persistence?
Filesystem persistence means saving data to a file on your computer, so it doesn’t disappear when the server restarts. In this challenge, we save the texts into a file (instead of just in memory) so that they stay there even when the server stops and starts again.

### How do I know if the texts are saved in the file?
You can check the file named texts.json in your project folder. After you save some texts using the app, open the file and you should see the texts listed there.

### Why do I need to use a SQL database?
A SQL database stores your data in a structured way (using tables) and can handle large amounts of data. In this challenge, you are learning how to save and retrieve data using a database, which is useful for many real-world applications.

### What is PostgreSQL, and why do I need it?
PostgreSQL is a type of SQL database. We use it to store our texts in a table instead of a file. SQL databases are powerful because they help organize and manage data efficiently.

### How do I create a table in PostgreSQL?
After installing and starting PostgreSQL, you can open the command-line interface (psql) and run this command:
CREATE TABLE texts (id SERIAL PRIMARY KEY, content TEXT NOT NULL, created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);
This creates a table where we can store the texts you enter in the app.

### What is pg, and why do I need it for Node.js?
pg is a Node.js library that helps your app connect to the PostgreSQL database. You install it using npm install pg, and it allows your app to send and receive data from the database.

### What if I don’t understand SQL commands?
SQL commands are like instructions you give to the database. They are used to create tables, add data, or retrieve data. If you're new to SQL, you can look up basic tutorials online or follow the examples in this challenge.

### How do I test if the texts are saved in the database?
After you save a text using the app, open the PostgreSQL interface (psql) and run the command SELECT * FROM texts;. This will show you all the texts stored in the database.

### How do I know if my app is connected to the database correctly?
When you run node server.js and use the app, you should be able to save and retrieve texts. If something goes wrong, you will see error messages in the terminal, which can help you figure out what’s not working.

### Why is it important to keep pushing changes to GitHub?
By pushing your changes to GitHub, you can save your work and share it with others. It also helps you keep track of different versions of your code, especially when you’re using branches.

