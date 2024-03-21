const options = {
  method: 'GET',
  headers: { 'Accept': 'application/json', 'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImFhMGZlYWViLWQyM2UtNGJjNC1iYjI1LWRjZTI2ZjA1YzI5YiIsIm9yZ0lkIjoiMzgzOTM5IiwidXNlcklkIjoiMzk0NTAyIiwidHlwZUlkIjoiYmIwM2QxMDQtNGY5Zi00MWUyLTg2N2MtODBhZDU5NTczYjcwIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTA5OTYyNDYsImV4cCI6NDg2Njc1NjI0Nn0.CkjWNiyKYyJ-w7iFehUG9W3HotX0s9Cmwg6SMRlyCKg' },
};
fetch('https://deep-index.moralis.io/api/v2/block/1000?chain=eth', options)
  .then((response) => response.json())
  .then((response) => printResult(response))
  .catch((err) => console.error(err))

const printResult = (response) => {
  const container = document.getElementById('result')
  container.innerHTML = "<pre>" + JSON.stringify(response ,null, 2) + "</pre>"
}
