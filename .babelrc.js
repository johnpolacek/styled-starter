module.exports = {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components", 
      {
        "ssr": true, 
        "displayName": true, 
        "preprocess": false 
      },
      "./env-config.js"
    ],
    ["transform-define",{"process.env.BACKEND_URL": process.env.ENV_GH_PAGES ? '/styled-starter/' : ''}]
  ]
}
