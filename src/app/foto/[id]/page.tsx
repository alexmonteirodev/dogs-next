import React from "react";

const FotoIdPage = async ({ params }: { params: { id: number } }) => {
  return <div>FotoIdPage id: {params.id}</div>;
};

export default FotoIdPage;
