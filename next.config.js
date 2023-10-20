/** @type {import('next').NextConfig} */
let assetPrefix = ''
let basePath = ''
let images = {
  loader: 'default',
}

let isGithubActions = process.env.BLUECHEESE_ACTIONS || false



console.log("bluechesse actions" , process.env.BLUECHEESE_ACTIONS)


if (isGithubActions) {
    // trim off `<owner>/`
  
    // assetPrefix = `/bluechesse-sports-landing/`
    // basePath = `/bluechesse-sports-landing` 
    images['loader'] = 'imgix'
    images['loaderFile'] = './imgix.ts'
    
  }


const nextConfig = {
   output: "export",
  //  assetPrefix: assetPrefix,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: images
}

module.exports = nextConfig
