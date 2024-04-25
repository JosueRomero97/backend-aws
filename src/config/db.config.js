import AWS from 'aws-sdk';
AWS.config.update({region:'us-east-1'})

const docClient = new AWS.DynamoDB.DocumentClient()

const tableUser = 'users'

export {docClient,tableUser}