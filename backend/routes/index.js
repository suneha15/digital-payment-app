const express = require("express");
const router = express.Router();

const userRouter = require("./user");

console.log("🔥 Root router loaded");

router.use("/user", userRouter);

module.exports = router;
/*all request would look like -
    /api/v1/user
    /api/v1/transaction

    then why not create seperate routers for - user , account, transaction
*/

/* the requests would be like- 

    /api/v1/user/signup
    /api/v1/user/signin
    /api/v1/user/changePassword

    or

    /api/v1/account/transferMoney
    /api/v1/account/balance

*/