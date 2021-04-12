require("dotenv").config({path:__dirname+'/../../.env'});

console.log("env github", process.env.GITHUB_PACKAGE_INSTALL_KEY)
exports.default =`
@vivek205:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${process.env.GITHUB_PACKAGE_INSTALL_KEY}
`;
