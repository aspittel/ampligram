/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_USERPROFILES_ARN
	STORAGE_USERPROFILES_NAME
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk')
const uuid = require('uuid')

AWS.config.update({ region: process.env.REGION })
const dynamodb = new AWS.DynamoDB.DocumentClient()


exports.handler = async (event) => {
    let tableName = process.env.STORAGE_USERPROFILES_NAME

    if (event.httpMethod === 'POST') {
        let putItemParams = {
            TableName: tableName,
            Item: {
                'id': uuid.v4(),
                'username': event.body.username,
                'profilepic': event.body.profilepic
            }
        }
        try {
            const newItem = await dynamodb.put(putItemParams).promise()
        } catch (err) {
            console.log(err)
        }
    }

    let data = await dynamodb.scan({ TableName: tableName}).promise()
    console.log(data)
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(data)
    };
    return response
};
