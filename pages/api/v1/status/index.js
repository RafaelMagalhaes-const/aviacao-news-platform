function status(request, response) {
  response
    .status(200)
    .json({ chave: "Alunos do Curso.dev sãoa cima da média" });
}

export default status;
