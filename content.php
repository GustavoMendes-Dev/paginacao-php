<div id="content">
  <?php
  // Verifica se a variável $pg tem algum valor, se não... Atribui um valor defalt pra variável
  $pg = ( isset( $_GET['pg'] )) ? $_GET['pg'] : null;

  if ($pg==''){
      include ('front/home.php');
  }elseif (file_exists($pg)){
      include $pg;
  } else {
      //Aqui ele vai chamar a página de erro, caso não encontre nenhuma página.
      include ('includes/page-error.inc');
  }
  ?>
</div>