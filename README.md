![image](https://user-images.githubusercontent.com/841120/210709152-e615c3db-5f62-48e3-acec-aaa9d5e34e05.png)


# About
AEMO GEL website documentation. 


## Run the site locally 

```bash
npm run start
```

## Build static site
```bash
npm run build
```

## Figma Design File 

https://www.figma.com/file/3gE3SKsrx1APsVTBkB8CTN/GEL-Site-redesign?node-id=262%3A26088

## Dependencies
This static website is build on [Docusaurus](https://docusaurus.io/)
It integrates with [AEMO Design Tokens](https://github.com/danielwang/aemo-design-tokens)

## MD style format 

`http://localhost:3000/docs/md-format`

## Project structure (key folders)

```bash
├── ...
├── build                    # generated static site 
├── docs                    
│   ├── branding             # top level nav items          
│   ├── components           # top level nav items
│   ├── guides               # top level nav items       
│   └── ...  
├── src                    
│   ├── pages                # homepage and community page                 
│   └── ...                 
└── ...
```
