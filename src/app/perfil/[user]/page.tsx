import React from "react";

const PerfilUserPage = ({ params }: { params: { user: string } }) => {
  return <div>PerfilUserPage User: {params.user}</div>;
};

export default PerfilUserPage;
