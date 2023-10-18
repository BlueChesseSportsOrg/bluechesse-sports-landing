/** @type {import('next').NextConfig} */
let assetPrefix = process.env.BASE_PATH
let basePath = process.env.BASE_PATH

let isGithubActions = process.env.BLUECHEESE_ACTIONS || false

if (isGithubActions) {
    // trim off `<owner>/`
  
    assetPrefix = `/bluechesse-sports-landing/`
    basePath = `/bluechesse-sports-landing` 
    
  }


const nextConfig = {
   //output: "export",
   assetPrefix: assetPrefix,
   basePath: basePath,
}

module.exports = nextConfig
