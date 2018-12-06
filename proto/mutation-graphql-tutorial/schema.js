const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList
} = graphql;
const _ = require('lodash');

const users = [{
        id: "20",
        name: "sushant"
    }, {
        id: "23",
        name: "abc"
    },
    {
        id: "24",
        name: "xyz"
    }
];

const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return _.find(users, {
                    id: args.id
                });
            }
        },

        users: {
            type: new GraphQLNonNull(new GraphQLList(UserType)),
            args: {
                first: {type: GraphQLInt},
                offset: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                console.log(args.first);
                console.log(args.offset);
                return users;
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: new GraphQLNonNull(new GraphQLList(UserType)),
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                name: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                console.log('mutation');
                console.log(args);
                users.push({ id: args.id, name: args.name });
                return users;
            }
        }
    }

})

module.exports = new GraphQLSchema({
    mutation: Mutation,
    query: RootQuery
});