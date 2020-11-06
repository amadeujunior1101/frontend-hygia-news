const PostValidator = (
  titleValue,
  contentValue,
  visibilityValue,
  categoryValue,
  Post
) => {
  if (titleValue === "") {
    return alert("O Titulo é obrigatorio");
  } else if (visibilityValue.length === 0) {
    return alert("Escolha a area da postagem");
  } else if (categoryValue.length === 0) {
    return alert("Escolha um categoria");
  } else if (contentValue.length === 0) {
    return alert("Insira o conteudo da postagem");
  } else {
    return Post();
  }
};

export default PostValidator;
