# syzero-password-manager
A secure credential manager for the paranoid

#Packages:

1. Styled Components
https://www.styled-components.com/docs/basics

2. Bootstrap
https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121

3. prop-types
https://www.npmjs.com/package/prop-types

#Notes:

Ursa requires python 2.7 due to node-gyp, you can install
python 2.7 for anaconda from the following link, https://conda.io/docs/user-guide/tasks/manage-python.html. 

1. conda create -n py27 python=2.7 anaconda

Activate the 2.7 enviorment by executing the following instruction.

2. source activate py7
3. python --version

4. npm install -g node-gyp
5. npm install ursa

Generate pub & key.pem certificates via these commands:
1. openssl genrsa -out ./my-server.key.pem 2048
2.  openssl rsa -in ./my-server.key.pem -pubout -out ./my-server.pub

#HELP:

1. https://github.com/bradtraversy/restify_customer_api 


#Links:

1. 2FA Library
https://www.npmjs.com/package/speakeasy

2. QR Code
https://www.npmjs.com/package/qrcode 

