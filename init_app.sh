# para a execucao do processo no servidor
PROCESS_ID=0
PROCESS_NAME="geoline-app"

export PORT=3002
export MONGO_URL="mongodb://localhost:27017/meteor"
export ROOT_URL="http://45.55.141.193"
export METEOR_SETTINGS="$(cat settings.json)"

pm2 stop $PROCESS_ID

cd ~/deploys/cadastro-geoline-app/bundle/programs/server

npm install

cd ../../

# inicia a execucao no processo no servidor
pm2 start main.js --name $PROCESS_NAME --watch
