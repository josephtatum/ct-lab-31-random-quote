export const getLipsyncs = (queen) => {
  console.log(queen);
  return fetch(`http://www.nokeynoshade.party/api/queens/${queen.id}/lipsyncs`)
    .then(res => res.json());
};
