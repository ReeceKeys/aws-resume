import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('LikeCounter')
def lambda_handler(event, context):
    response = table.get_item(Key={
        'id':'0'
    })
    CounterValue = response['Item']['CounterValue']
    CounterValue = CounterValue + 1
    print(CounterValue)
    response = table.put_item(Item={
        'id':'0',
        'CounterValue': CounterValue
    })
    
    return CounterValue
    