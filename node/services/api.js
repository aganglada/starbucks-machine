import graphqlHttp from 'express-graphql'
import {buildSchema} from 'graphql'

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return 'Hello World!'
  }
}

export default graphqlHttp({
  schema,
  rootValue: root,
  graphiql: true
})