const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');


app.use('/graphql', expressGraphQL({
    graphiql: true
}))

app.listen(3000, ()=> {
    console.log('server is running on port 3000');
});