/** @type {import('next').NextConfig} */
let assetPrefix = ''
let basePath = ''

let isGithubActions = process.env.BLUECHEESE_ACTIONS || false

if (isGithubActions) {
    // trim off `<owner>/`
  
    assetPrefix = `/bluechesse-sports-landing/`
    basePath = `/bluechesse-sports-landing` 
    
  }


const nextConfig = {
//    output: "export",
   assetPrefix: assetPrefix,
   basePath: basePath,
}

module.exports = nextConfig
