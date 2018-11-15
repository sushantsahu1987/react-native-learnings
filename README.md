# syzero-password-manager

A secure credential manager for the paranoid


### Packages

    1. Styled Components
    https://www.styled-components.com/docs/basics

    2. Bootstrap
    https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121

    3. prop-types
    https://www.npmjs.com/package/prop-types

### Notes

    Ursa requires python 2.7 due to node-gyp, you can install
    python 2.7 for anaconda from the following link, https://conda.io/docs/user-guide/tasks/manage-python.html. 

    1. conda create -n py27 python=2.7 anaconda

    Activate the 2.7 enviorment by executing the following instruction.

    2. source activate py7
    3. python --version

    4. npm install -g node-gyp
    5. npm install ursa

    Generate pub & key.pem certificates on terminal via these commands:
      1. openssl genrsa -out private.pem 2048
      2. openssl rsa -in private.pem -outform PEM -pubout -out public.pem

    Generate pub & key.pem certificates on the fly using crypto or ursa :
    1. https://stackoverflow.com/questions/8520973/how-to-create-a-pair-private-public-keys-using-node-js-crypto

### Help

    1. https://github.com/bradtraversy/restify_customer_api 
    2. https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
    3. https://gist.github.com/coolaj86/f6f36efce2821dfb046d
    4. https://www.toptal.com/nodejs/secure-rest-api-in-nodejs
    5. https://medium.com/@brandonstilson/lets-encrypt-files-with-node-85037bea8c0e

### Links

    1. 2FA Library
    https://www.npmjs.com/package/speakeasy

    2. QR Code
    https://www.npmjs.com/package/qrcode 

    3. Private/Public Key Naming
    https://superuser.com/questions/1247947/how-to-name-openssh-public-and-private-key-pairs

    4. NodeJS Streams
    https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93

    5. Generate RSA Keys from command
    https://rietta.com/blog/2012/01/27/openssl-generating-rsa-key-from-command/
    https://github.com/ivan0124/Linux-programming/wiki/How-to-generate-RSA-public-and-private-keys(PEM-format)-with-openssl-%3F
    6. Redis
    https://redislabs.com/
