/** @type {import('next').NextConfig} */
let assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH
let basePath = process.env.NEXT_PUBLIC_BASE_PATH

console.log("base path" , basePath)

// let isGithubActions = process.env.BLUECHEESE_ACTIONS || false

// if (isGithubActions) {
//     // trim off `<owner>/`
  
//     assetPrefix = `/bluechesse-sports-landing/`
//     basePath = `/bluechesse-sports-landing` 
    
//   }


const nextConfig = {
   output: "export",
  //  assetPrefix: assetPrefix,
   basePath: basePath,
}

module.exports = nextConfig
