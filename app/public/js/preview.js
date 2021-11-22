dataJS("fileUp").onchange = (e) => {
  const input = e.target;
  const outpout = dataJS("Preview");
  const previewCurriculo = dataJS("previewCurriculum");
  const placeholder = dataJS("previewCurriculum--placeholder");

  var reader = new FileReader();
  reader.onload = () => {
    outpout.src = reader.result;
    previewCurriculo.src = reader.result;
  };

  if (input.files && input.files[0]) {
    display("none", dataJS("inputFile"));
    display("flex", outpout);
    display("flex", dataJS("remove-preview"));
    display("flex", dataJS("remove-preview"));

    display("flex", previewCurriculo);
    display("none", placeholder);

    reader.readAsDataURL(input.files[0]);
    const photoacao = dataJS("photoacao");
    if (photoacao) photoacao.value = "alterado";
  }
};
 
dataJS("btn-remover").onclick = (e) => {
  const outpout = dataJS("Preview");
  const previewCurriculo = dataJS("previewCurriculum");
  const placeholder = dataJS("previewCurriculum--placeholder");
  const photoacao = dataJS("photoacao");
  if (photoacao) photoacao.value = "delet";

  outpout.src = "";
  previewCurriculo.src = "";

  display("none", outpout);
  display("none", dataJS("remove-preview"));
  display("flex", dataJS("inputFile"));

  display("none", previewCurriculo);
  display("flex", placeholder);
  dataJS("fileUp").value = "";
};
