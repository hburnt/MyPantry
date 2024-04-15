import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolID: "us-east-1_3VYo1e96r",
    ClientID: ""
}

export default new CognitoUserPool(poolData);