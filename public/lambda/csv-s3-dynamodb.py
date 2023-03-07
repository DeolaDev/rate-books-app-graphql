import json
import boto3
from datetime import datetime

s3_client = boto3.client("s3")
dynamodb_client = boto3.resource("dynamodb")

table = dynamodb_client.Table("S3CsvBook-bywzmapc7be3rd5q2ekb3flyvu-staging")

def lambda_handler(event, context):
    bucketname = event['Records'][0]['s3']['bucket']['name']
    s3file_name = event['Records'][0]['s3']['object']['key']
    resp = s3_client.get_object(Bucket=bucketname, Key=s3file_name)
    data = resp['Body'].read().decode("utf-8")
    
    Books = data.split("\n")
    
    for book in Books:
        print(book)
        print(datetime.now())
        book_entry = book.split(",")
        # add entry to dynamodb
        try:
            table.put_item(
                Item = {
                    "id"        : book_entry[0],
                    "title"     : book_entry[1],
                    "author"    : book_entry[2],
                    "rating"    : book_entry[3],
                    "createdAt" : datetime.now(),
                    "updatedAt" : datetime.now()
                    
                }
            )
        except Exception as e:
            print("Error")
