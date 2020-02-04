export const getRandomQueen = () => {
  return fetch('http://www.nokeynoshade.party/api/queens/all')
    .then(res => res.json())
    .then(res => res[Math.floor(Math.random() * res.length)]);
};
