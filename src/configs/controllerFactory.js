import * as ApiHandlers from "../services/api";
import * as Controllers from "../controllers";
import * as Operations from "../services/operation";

//

const authOperations = new Operations.AuthOperation(ApiHandlers.authApiHendler)
const authControllers = new Controllers.AuthController(authOperations);

export {
    authControllers
}


