# sh curl-scripts/Game_Actions/index.sh

curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  data: ''

echo
