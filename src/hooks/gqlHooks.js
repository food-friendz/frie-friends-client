const { useMutation, useQuery } = require("@apollo/client");

// make and export a react hook that accepts a mutation and a data  which defaults to {} and makes a apollo mutation request with headers appended
function useDoMutation(mutation, data = {}) {
  const [doMutation, { response, loading, error }] = useMutation(mutation, {
    context: {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    },
    variables: data,
  });

  return [doMutation, { response, loading, error }];
}

// make and export a react hook that accepts a query and a data  which defaults to {} and makes a apollo query request with headers appended
function useDoQuery(query, data = {}) {
  const [doQuery, { data: response, loading, error }] = useQuery(query, {
    context: {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    },
    variables: data,
  });

  return [doQuery, { response, loading, error }];
}

// export the hooks
export { useDoMutation, useDoQuery };
