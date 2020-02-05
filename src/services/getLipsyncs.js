export const getLipsyncs = (queen) => {
  return fetch(`http://www.nokeynoshade.party/api/queens/${queen.id}/lipsyncs`)
    .then(res => res.json());
};
