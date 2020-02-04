export const getQueens = () => {
  return fetch('http://www.nokeynoshade.party/api/queens/all')
    .then(res => res.json());
};
