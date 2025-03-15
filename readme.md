1. pnpm install --save-dev typescript @types/node
2. pnpm install @apollo/server graphql
3. npx tsc --init 
4. Updated 
    "module": "NodeNext",
    "moduleResolution": "nodenext",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    in tsconfig.json and manually add .js extension in .ts files 
    to resolve imports issue 
    "Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'E:\Edu\Self-Projects\FullStack\dist\data' imported from E:\Edu\Self-Projects\FullStack\dist\index.js"

