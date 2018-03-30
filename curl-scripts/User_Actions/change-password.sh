# sh curl-scripts/User_Actions/change-password.sh

curl "http://tic-tac-toe.wdibos.com/change-password/:id" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
