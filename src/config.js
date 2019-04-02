export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "akhawaja-notes-app"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://cs5m2u3at7.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8rMNawaG9",
    APP_CLIENT_ID: "5he0d14b8jkjd2vbuomiv60eqh",
    IDENTITY_POOL_ID: "us-east-1:0cde7250-1d4a-4bfc-a66a-448ec7cf16a1"
  }
};
